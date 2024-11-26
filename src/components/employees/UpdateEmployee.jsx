import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const UpdateEmployee = () => {
    const {state} = useLocation();
    const emp = state;

    const [firstName, setFirstName] = useState(emp.first_name);
    const [lastName, setLastName] = useState(emp.last_name);
    const [email, setEmail] = useState(emp.email);
    const [position, setPosition] = useState(emp.position);
    const [salary, setSalary] = useState(emp.salary);
    const [dateOfJoining, setDateOfJoining] = useState(emp.date_of_joining);
    const [department, setDepartment] = useState(emp.department);
    const navigate = useNavigate();

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        updateEmp();
        navigate("/employees");
    }

    const updateEmp = () => {
        let employee = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "position": position,
            "salary": salary,
            "date_of_joining": dateOfJoining,
            "department": department
        }

        axios.put(`/api/v1/emp/employees/${emp._id}`, employee);
    }

    const handleBack = () => {
        navigate("/employees");
    }

    return (
        <Form onSubmit={handleUpdateSubmit}>
            <div className="form-hdr">
                <h3>Update Employee Details</h3>
                <hr />
            </div>
            <Row>
                <Col>
                    <Form.Group className="mb-3 text-input">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                        type="text"
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
                <hr />
                <Button onClick={handleBack} className="footer-btn" variant="secondary">Back</Button>
                <Button type="submit" className="footer-btn">Update Employee</Button>
            </div>
        </Form>
    );
}

export default UpdateEmployee;