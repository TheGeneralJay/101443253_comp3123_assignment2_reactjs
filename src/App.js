import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import EmployeeManagement from "./components/employees/EmployeeManagement";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employees" element={<EmployeeManagement />} />
      </Routes>
    </div>
  );
};

export default App;
