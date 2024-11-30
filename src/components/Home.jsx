import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginChecker from "./authentication/LoginChecker";
import Button from "react-bootstrap/Button";

const Home = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    useEffect(() => {
        document.title = "Management Tools | Home Page";
    });

    LoginChecker();
    
    const handleEmpSubmit = () => {
        navigate("/employees");
    }

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <div className="home">
            <div className="home-hdr">
                <h1>Home Page</h1>
                <h3>Welcome, {user}!</h3>
            </div>
            <Button onClick={handleEmpSubmit} className="emp-btn">Employee Management</Button>
            <br />
            <Button onClick={handleLogout} variant="secondary" className="logout-btn">Logout</Button>
        </div>
    );
}

export default Home;