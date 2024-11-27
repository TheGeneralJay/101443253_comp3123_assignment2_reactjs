import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import  Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import LoginChecker from "../authentication/LoginChecker";

const EmployeeManagement = () => {
    const [employees, setEmployees] = useState([{}]);
    const navigate = useNavigate();

    useEffect(() => {
        getEmployees();
    });

    LoginChecker();

    // Grab employees from the database.
    const getEmployees = async () => {
        await axios.get("/api/v1/emp/employees")
        .then(res => {
            setEmployees(res.data);
        });
    }

    const handleGoToHome = () => {
        navigate("/");
    }

    const handleGoToViewEmployee = (emp) => {
        navigate(`/employees/${emp._id}`, { state: emp });
    }

    const handleGoToUpdateEmployee = (emp) => {
        navigate(`/employees/update/${emp._id}`, { state: emp });
    }

    const handleGoToDeleteEmployee = (emp) => {
        navigate(`/employees/delete/${emp._id}`, { state: emp });
    }

    const handleGoToAddEmployee = () => {
        navigate("/employees/add");
    }

    return (
        <>
            <Table striped bordered hover variant="dark" className="emp-list">
                <thead>
                    <tr>
                        <th colSpan={5} className="emp-list-hdr">Employees</th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Admin Options</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => 
                        <tr>
                            <td className="emp-info">{emp._id}</td>
                            <td className="emp-info">{emp.first_name} {emp.last_name}</td>
                            <td className="emp-info">{emp.email}</td>
                            <td className="emp-info">{emp.position}</td>
                            <td className="admin-panel">
                                <Button className="admin-btn" variant="info" onClick={() => handleGoToViewEmployee(emp)}>View Employee</Button>
                                <Button className="admin-btn" variant="secondary" onClick={() => handleGoToUpdateEmployee(emp)}>Update Employee</Button>
                                <Button className="admin-btn" variant="danger" onClick={() => handleGoToDeleteEmployee(emp)}>Delete Employee</Button>
                            </td>
                        </tr>
                    )}
                    <tr className="table-footer">
                        <td colSpan={5}>
                            <Button className="footer-btn right-btn" variant="success" onClick={handleGoToAddEmployee}>Add Employee</Button>
                            <Button className="footer-btn" variant="info" onClick={handleGoToHome}>Home</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            </>
    );
}

export default EmployeeManagement;
