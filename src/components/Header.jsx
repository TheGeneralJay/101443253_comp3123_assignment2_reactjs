import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Header = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        checkLogin();
    }); 

    const checkLogin = () => {
        if (localStorage.length !== 0) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    if (loggedIn) {
        return (
            <div className="header">
                <Button className="logout-btn" onClick={handleLogout}>Logout</Button>
            </div>
        );
    }
}

export default Header;