import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Navigator.
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        login();
        navigate("/");
    }

    const login = () => {
        let user = {
            "email": email,
            "password": password
        }
        
        axios.post("/api/v1/user/login", user);
    }

    return (
        <form onSubmit={e => {handleSubmit(e)}}>
            <label>Email:
                <input 
                type="text"
                name="email"
                value={email}
                onChange={item => setEmail(item.target.value)}
                />
            </label>

            <label>Password:
                <input 
                type="text"
                name="password"
                value={password}
                onChange={item => setPassword(item.target.value)}
                />
            </label>

            <input type="submit" value="Sign Up" />
        </form>
    );
}

export default Login;