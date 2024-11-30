import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import LoginChecker from "../authentication/LoginChecker";
import API_URLS from "../constants/ApiUrls";

const AddEmployee = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Management Tools | Add Employee";
    });

    LoginChecker();

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

        axios.post(API_URLS.EMPLOYEE, employee);
    }

    const handleBack = () => {
        navigate("/employees");
    }

    return (
        <Form onSubmit={handleAddSubmit}>
            <div className="form-hdr">
                <h3>Add New Employee</h3>
                <hr />
            </div>
            <Row>
                <Col>
                    <Form.Group className="mb-3 text-input">
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
                    <Form.Group className="mb-3 text-input">
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
                    <Form.Group className="mb-3 text-input">
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
                    <Form.Group className="mb-3 text-input">
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
                    <Form.Group className="mb-3 text-input">
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
                    <Form.Group className="mb-3 text-input">
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
                    <Form.Group className="date-pkr-col">
                        <Form.Label>Date of Joining</Form.Label>
                        <DatePicker
                        className="date-pkr"
                        value={dateOfJoining}
                        onChange={item => {setDateOfJoining(new Date(item))}}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <div className="form-ftr">
                <Button onClick={handleBack} className="footer-btn" variant="secondary">Back</Button>
                <Button type="submit" className="footer-btn">Add Employee</Button>
            </div>
        </Form>
    );
}

export default AddEmployee;