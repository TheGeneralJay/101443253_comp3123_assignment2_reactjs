import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    return (
        <form onSubmit={e => {handleAddSubmit(e)}}>
            <label>First Name:
                <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={item => {setFirstName(item.target.value)}}
                />
            </label>

            <label>Last Name:
                <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={item => {setLastName(item.target.value)}}
                />
            </label>

            <label>Email:
                <input
                type="text"
                name="email"
                value={email}
                onChange={item => {setEmail(item.target.value)}}
                />
            </label>

            <label>Position:
                <input
                type="text"
                name="position"
                value={position}
                onChange={item => {setPosition(item.target.value)}}
                />
            </label>

            <label>Salary:
                <input
                type="text"
                name="salary"
                value={salary}
                onChange={item => {setSalary(item.target.value)}}
                />
            </label>

            <label>Date of Joining:
                <input
                type="text"
                name="dateOfJoining"
                value={dateOfJoining}
                onChange={item => {setDateOfJoining(item.target.value)}}
                />
            </label>

            <label>Department:
                <input
                type="text"
                name="department"
                value={department}
                onChange={item => {setDepartment(item.target.value)}}
                />
            </label>

            <input type="submit" value="Add Employee" />
        </form>
    );
}

export default AddEmployee;