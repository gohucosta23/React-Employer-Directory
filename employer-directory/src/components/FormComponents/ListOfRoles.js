import React from 'react';
import employeeList from "../../employeeList.json";

const roles = employeeList.map(employee => employee.role);
const filteredRoles = Array.from(new Set(roles));

export default function ListOfRoles() {
    return (
        <>
        {filteredRoles.map(role => (
            <option >{role}</option>
        ))}
        </>
    )
}
