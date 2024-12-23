import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import API_URLS from "../constants/ApiUrls";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    useEffect(() => {
        document.title = "Management Tools | Register";
    });

    // Navigator.
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup();
    }    

    const handleLogin = () => {
        navigate("/");
    }

    const signup = () => {
        // Check if both passwords match.
        if (password !== repeatPassword) {
            alert("The passwords you entered do not match!");
            setPassword("");
            setRepeatPassword("");
        } else {
            let user = {
                "username": username,
                "email": email,
                "password": password
            }
    
            axios.post(API_URLS.SIGNUP, user, {
                validateStatus: function (status) {
                    return status < 500;
                }
            }).then(res => {
                // Axios defaults errors beyond the 200 range, so fix that and handle for invalid input
                // to match the status code sent by backend.
                if (res.status !== 400) {
                    handleLogin();
                }
            });
        }
    }    

    return (
        <Form onSubmit={handleSubmit}>
            <div className="form-hdr">
                <h3>Register</h3>
                <hr />
            </div>

            <Row>
                <Col>
                    <Form.Group className="mb-3 text-input">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                        type="text"
                        required
                        placeholder="Enter your username..."
                        value={username}
                        onChange={item => {setUsername(item.target.value)}}
                        />
                    </Form.Group>
                </Col>

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

            <Row>
                <Col>
                    <Form.Group className="mb-3 text-input">
                        <Form.Label>Re-enter Password</Form.Label>
                        <Form.Control
                        type="password"
                        required
                        placeholder="Enter your password..."
                        value={repeatPassword}
                        onChange={item => {setRepeatPassword(item.target.value)}}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <div className="form-ftr">
                <Button type="submit" className="footer-btn" variant="success">Sign Up</Button>
            </div>

            <div className="other-option-ftr">
                <p>Already have an account?
                    <Button onClick={handleLogin} className="footer-btn" variant="warning">Login Now!</Button>
                </p>
            </div>
        </Form>
    );
}

export default Signup;