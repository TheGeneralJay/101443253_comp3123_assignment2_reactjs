import React, { useEffect, useState } from "react";
import axios from "axios";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        signup();
    }

    const signup = () => {
        let user = {
            "username": username,
            "email": email,
            "password": password
        }

        console.log(user);
        axios.post("/api/v1/user/signup", user);
    }

    return (
        <form onSubmit={e => {handleSubmit(e)}}>
            <label>Username:
                <input 
                type="text"
                name="username"
                value={username}
                onChange={item => setUsername(item.target.value)}
                />
            </label>

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

export default Signup;