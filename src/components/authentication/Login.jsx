import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import ERROR_CODES from "./errors/ErrorCodes";
import API_URLS from "../constants/ApiUrls";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        document.title = "Management Tools | Login";
    });

    // Navigator.
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Remove existing localStorage.
        localStorage.clear();
        login();
    }

    const handleSignUp = () => {
        navigate("/signup");
    }

    const login = () => {
        let user = {
            "email": email,
            "password": password
        }

        axios.post(API_URLS.LOGIN, user, {
            validateStatus: function (status) {
                return status < 500;
            }
        }).then(res => {
            // Axios defaults errors beyond the 200 range, so fix that and handle for invalid input
            // to match the status code sent by backend.
            if (res.status !== 200) {
                if (res.status === ERROR_CODES.INCORRECT_EMAIL) {
                    alert("Incorrect Email! Please try again!");
                    setEmail("");
                    setPassword("");
                } else if (res.status === ERROR_CODES.INCORRECT_PASSWORD) {
                    alert("Incorrect Password! Please try again!");
                    setPassword("");
                } else {
                    alert("An error has occurred. Please try again later.");
                }
            } else {
                localStorage.setItem("email", email);
                navigate("/employees");
            }
        });
    }

    return (
        <Form className="login-form" onSubmit={handleSubmit}>
            <div className="form-hdr">
                <h3>Login</h3>
                <hr />
            </div>

            <Row>
                <Col>
                    <Form.Group className="mb-3 text-input">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type="text"
                        required
                        placeholder="Enter your email..."
                        value={email}
                        onChange={item => {setEmail(item.target.value)}}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3 text-input">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        required
                        placeholder="Enter your password..."
                        value={password}
                        onChange={item => {setPassword(item.target.value)}}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <div className="form-ftr">
                <Button type="submit" className="footer-btn" variant="success">Login</Button>
            </div>

            <div className="other-option-ftr">
                <p>Don't have an account?
                    <Button onClick={handleSignUp} className="footer-btn" variant="warning">Register Now!</Button>
                </p>
            </div>
        </Form>
    );
}

export default Login;