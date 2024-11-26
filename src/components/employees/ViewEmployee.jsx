import React from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/esm/Table";
import { useLocation, useNavigate } from "react-router-dom";

const ViewEmployee = () => {
    const navigate = useNavigate();
    // Grab the ID from the state passed through useNavigate() on the list page.
    const {state} = useLocation();
    const emp = state;

    const handleBack = () => {
        navigate("/employees");
    }

    return (
        <Table striped bordered hover variant="dark" >
            <thead>
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
                    <td>{emp._id}</td>
                    <td>{emp.first_name} {emp._last_name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.position}</td>
                    <td>{emp.salary}</td>
                    <td>{emp.date_of_joining}</td>
                    <td>{emp.department}</td>
                </tr>
                <tr>
                    <td colSpan={7}>
                        <Button variant="secondary" onClick={handleBack}>Back</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ViewEmployee;