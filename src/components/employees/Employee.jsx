import React, { useEffect, useState } from "react";
import axios from "axios";

const Employee = () => {
    const [employees, setEmployees] = useState([{}]);

    const employee = {
      first_name: "Sam",
      last_name: "Relius",
      email: "samrel@email.com",
      position: "Roboticist",
      salary: 100,
      date_of_joining: "2023-08-10T00:00:00.000Z",
      department: "Medical",
    };
  
    const getEmployees = () => {
      axios.get("/api/v1/emp/employees").then((res) => {
        console.log(res.data);
      });
    };
  
    const postEmployee = () => {
      axios.post("/api/v1/emp/employees", employee).then((res) => {
        console.log(res.data);
      });
    };
}

export default Employee;