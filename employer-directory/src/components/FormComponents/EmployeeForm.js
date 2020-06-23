import React from 'react';
import ListOfRoles from "./ListOfRoles";


export default function EmployeeForm(props) {

    return (
            <>
            <label><strong>Search by Id</strong></label>
            <div className="input-group mb-5">
                <input type="number"
                    className="form-control"
                    placeholder="Enter Id"
                    onChange={props.handleInputChange}
                    value={props.searchId}
                    name="searchId" />
                <div className="input-group-append">
                    <button onClick={props.handleFormSubmit} className="btn" type="button">Search</button>
                </div>
            </div>
            <hr></hr>
            <label><strong>Sort by Name</strong></label>
            <select className="custom-select custom-select-lg mb-5" onChange={props.sortByName}>
                <option>None</option>
                <option value="firstName">First Name</option>
                <option value="lastName">Last Name</option>
            </select>
            <hr></hr>
            <label><strong>Filter by Role</strong></label>
            <select className="custom-select custom-select-lg mb-5" onChange={props.filterByRole}>
                <option>None</option>
                <ListOfRoles />
            </select>
            </>
    )
}
