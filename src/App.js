import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import EmployeeManagement from "./components/employees/EmployeeManagement";
import DeleteEmployee from "./components/employees/DeleteEmployee";
import AddEmployee from "./components/employees/AddEmployee";
import ViewEmployee from "./components/employees/ViewEmployee";
import UpdateEmployee from "./components/employees/UpdateEmployee";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employees" element={<EmployeeManagement />} />
        <Route path="/employees/delete/:id" element={<DeleteEmployee />} />
        <Route path="/employees/add" element={<AddEmployee />} />
        <Route path="/employees/:id" element={<ViewEmployee />} />
        <Route path="/employees/update/:id" element={<UpdateEmployee />} />
      </Routes>
    </div>
  );
};

export default App;
