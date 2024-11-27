import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Navigator.
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Remove existing localStorage.
        localStorage.clear();

        login();
        
        localStorage.setItem("email", email);
        // Redirect to home.
        navigate("/employees");
    }

    const handleSignUp = () => {
        navigate("/signup");
    }

    const login = () => {
        let user = {
            "email": email,
            "password": password
        }

        axios.post("/api/v1/user/login", user);
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
                <p>Don't have an account? Sign up now!</p>
                <Button onClick={handleSignUp} className="footer-btn" variant="warning">Sign Up</Button>
            </div>
        </Form>
    );
}

export default Login;