import React from "react";
import { useNavigate } from "react-router-dom";
import LoginChecker from "./authentication/LoginChecker";

const Home = () => {
    const navigate = useNavigate();

    LoginChecker();

    const handleSignupSubmit = () => {
        navigate("/signup");
    }

    const handleLoginSubmit = () => {
        navigate("/login");
    }
    
    const handleEmpSubmit = () => {
        navigate("/employees");
    }

    return (
        <div>
        <h1>Home Page</h1>
        <button onClick={handleSignupSubmit}>Sign Up</button>
        <button onClick={handleLoginSubmit}>Login</button>
        <button onClick={handleEmpSubmit}>Employee Management</button>
        </div>
    );
}

export default Home;