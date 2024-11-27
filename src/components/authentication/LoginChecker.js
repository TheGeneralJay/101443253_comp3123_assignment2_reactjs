import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginChecker() {
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn();
  });

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
}
