import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import EmployeeManagement from "./components/employees/EmployeeManagement";
import DeleteEmployee from "./components/employees/DeleteEmployee";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employees" element={<EmployeeManagement />} />
        <Route path="/employees/delete/:id" element={<DeleteEmployee />} />
      </Routes>
    </div>
  );
};

export default App;
