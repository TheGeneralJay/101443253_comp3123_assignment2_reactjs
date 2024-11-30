import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URLS from "../constants/ApiUrls";

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
      axios.get(`${API_URLS.LOGIN}/${email}`).then((res) => {
        if (res.data.email !== email) {
          // If the email does not match the stored variable, redirect to the login page.
          goToLogin();
        } else {
          // Place the username in local storage to make the home page welcoming.
          localStorage.setItem("user", res.data.username);
        }
      });
    } catch (e) {}
  };

  const goToLogin = () => {
    navigate("/login");
  };
}
