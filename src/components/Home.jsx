import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        isLoggedIn();
      });

    const handleSignupSubmit = () => {
        navigate("/signup");
    }

    const handleLoginSubmit = () => {
        navigate("/login");
    }
    
    const handleEmpSubmit = () => {
        navigate("/employees");
    }

    const email = localStorage.getItem("email");
    
    // Check if user is logged in.
    const isLoggedIn = () => {
      if (email === null) {
        goToLogin();
        return;
      }
  
      try {
        // Ensure the email is within the users database.
        axios.get(`/api/v1/user/login/${email}`).then((res) => {
          if (res.data.email !== email) {
            // If the email does not match the stored variable, redirect to the login page.
            goToLogin();
          }
        });
      } catch (e) {}
    };
  
    const goToLogin = () => {
      navigate("/login");
    };

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