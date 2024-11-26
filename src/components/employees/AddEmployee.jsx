import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const AddEmployee = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();

    const handleAddSubmit = (e) => {
        e.preventDefault();
        addEmp();
        navigate("/employees");
    }

    const addEmp = () => {
        let employee = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "position": position,
            "salary": salary,
            "date_of_joining": dateOfJoining,
            "department": department
        }

        axios.post("/api/v1/emp/employees", employee);
    }

    const handleBack = () => {
        navigate("/employees");
    }

    return (
        <Form onSubmit={handleAddSubmit}>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Enter first name..."
                        value={firstName}
                        onChange={item => {setFirstName(item.target.value)}}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Enter last name..."
                        value={lastName}
                        onChange={item => {setLastName(item.target.value)}}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Enter email..."
                        value={email}
                        onChange={item => {setEmail(item.target.value)}}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Position</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Enter position..."
                        value={position}
                        onChange={item => {setPosition(item.target.value)}}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Department</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Enter department..."
                        value={department}
                        onChange={item => {setDepartment(item.target.value)}}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Enter salary..."
                        value={salary}
                        onChange={item => {setSalary(item.target.value)}}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <DatePicker 
                    value={dateOfJoining}
                    onChange={item => {setDateOfJoining(new Date(item))}}
                    />
                </Col>
            </Row>
            <Button onClick={handleBack} variant="secondary">Back</Button>
            <Button type="submit">Add Employee</Button>
        </Form>
    );
}

export default AddEmployee;