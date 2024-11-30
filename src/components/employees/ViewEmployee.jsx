import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/esm/Table";
import { useLocation, useNavigate } from "react-router-dom";
import LoginChecker from "../authentication/LoginChecker";

const ViewEmployee = () => {
    const navigate = useNavigate();
    // Grab the ID from the state passed through useNavigate() on the list page.
    const {state} = useLocation();
    const emp = state;

    useEffect(() => {
        document.title = "Management Tools | View Employee";
    });

    LoginChecker();

    const handleBack = () => {
        navigate("/employees");
    }
    
    return (
        <Table striped bordered hover variant="dark" className="emp-list">
            <thead>
                <tr className="emp-list-hdr">
                    <th colSpan={7}>Employee Details</th>
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
                    <td className="emp-info">{emp.first_name} {emp.last_name}</td>
                    <td className="emp-info">{emp.email}</td>
                    <td className="emp-info">{emp.position}</td>
                    <td className="emp-info">{emp.salary}</td>
                    <td className="emp-info">{new Date(emp.date_of_joining).toLocaleDateString("en-US")}</td>
                    <td className="emp-info">{emp.department}</td>
                </tr>
                <tr className="table-footer">
                    <td colSpan={7}>
                        <Button className="footer-btn" variant="info" onClick={handleBack}>Back</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ViewEmployee;