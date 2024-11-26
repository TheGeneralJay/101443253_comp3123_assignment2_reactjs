import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import  Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const EmployeeManagement = () => {
    const [employees, setEmployees] = useState([{}]);
    const navigate = useNavigate();

    useEffect(() => {
        getEmployees();
    }, []);

    // Grab employees from the database.
    const getEmployees = async () => {
        await axios.get("/api/v1/emp/employees")
        .then(res => {
            setEmployees(res.data);
        });
    }

    const handleGoToDeleteEmployee = (emp) => {
        navigate(`/employees/delete/${emp._id}`, { state: emp });
    }

    const handleGoToAddEmployee = () => {
        navigate("/employees/add");
    }

    return (
            <Table striped bordered hover variant="dark" >
                <thead>
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
                            <td>{emp._id}</td>
                            <td>{emp.first_name} {emp.last_name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.position}</td>
                            <td>
                                <Button variant="info">View Employee</Button>
                                <Button variant="secondary">Update Employee</Button>
                                <Button variant="danger" onClick={() => handleGoToDeleteEmployee(emp)}>Delete Employee</Button>
                            </td>
                        </tr>
                    )}
                    <tr>
                        <td colSpan={5}>
                            <Button variant="success" onClick={handleGoToAddEmployee}>Add Employee</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
    );
}

export default EmployeeManagement;
