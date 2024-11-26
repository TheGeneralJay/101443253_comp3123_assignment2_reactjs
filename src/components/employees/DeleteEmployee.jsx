import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteEmployee = () => {
    const navigate = useNavigate();
    // Grab the ID from the state passed through useNavigate() on the list page.
    const {state} = useLocation();
    const emp = state;

    // Delete employee.
    const handleDeleteEmployee = () => {
        axios.delete(`/api/v1/emp/employees/?id=${emp._id}`);
        handleBack();
    }

    const handleBack = () => {
        navigate("/employees");
    }
    
    return (
        <Table striped bordered hover variant="dark" className="emp-list">
            <thead>
                <tr className="emp-list-hdr">
                    <th colSpan={7}>Are you sure you want to delete this employee?</th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Date of Joining</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="emp-info">{emp._id}</td>
                    <td className="emp-info">{emp.first_name} {emp._last_name}</td>
                    <td className="emp-info">{emp.email}</td>
                    <td className="emp-info">{emp.position}</td>
                    <td className="emp-info">{emp.salary}</td>
                    <td className="emp-info">{new Date(emp.date_of_joining).toLocaleDateString("en-US")}</td>
                    <td className="emp-info">{emp.department}</td>
                </tr>
                <tr className="table-footer">
                    <td colSpan={7}>
                        <Button className="footer-btn" variant="secondary" onClick={handleBack}>Back</Button>
                        <Button className="footer-btn" variant="danger" onClick={handleDeleteEmployee}>Delete Employee</Button>
                    </td>
                </tr>
            </tbody>

        </Table>
    );
}

export default DeleteEmployee;