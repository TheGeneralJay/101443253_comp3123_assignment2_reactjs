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
        <>
            <h3 className="confirm-delete-hdr">Are you sure you want to delete this employee?</h3>
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{emp._id}</td>
                        <td>{emp.first_name} {emp._last_name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.position}</td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <Button variant="secondary" onClick={handleBack}>Back</Button>
                            <Button variant="danger" onClick={handleDeleteEmployee}>Delete Employee</Button>
                        </td>
                    </tr>
                </tbody>

            </Table>
        </>
    );
}

export default DeleteEmployee;