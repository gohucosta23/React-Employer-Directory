import React, { Component } from 'react';
import employeeList from "../employeeList.json";
import EmployeeCard from "./EmployeeCard";
import EmployeeForm from "./EmployeeForm";
import Wrapper from "./Wrapper/index";
import EmployeeCardContainer from "./EmployeeCardContainer";

export default class Employee extends Component {

    state = {
        search : employeeList,
        searchId : 0
    }
   
    handleInputChange = (event) => {

        const {name, value} = event.target;

        this.setState({
            [name] : value  
        });
    
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        
        const employeeById = employeeList.filter(employee => {
            
            return employee.employeeId === parseInt(this.state.searchId)
        });
        this.setState({
            search : employeeById
        })
    }
    filterByRole = event => {

        const role = event.target.value;
        const filterByRole = employeeList.filter(employee => employee.role === role);
       
        this.setState({
            search : filterByRole
        })
    }
    sortByName = event => {

        const option = event.target.value;
       
        if(option === "Ascending") {
            const sortByName = employeeList.sort((a, b) => (a.firstName.charAt(0) > b.firstName.charAt(0)) ? 1 : -1);
            this.setState({
                search : sortByName
        })
        }else if(option === "Descending") {
            const sortByName = employeeList.sort((a, b) => (a.firstName.charAt(0) < b.firstName.charAt(0)) ? 1 : -1);
            this.setState({
                search : sortByName
        })
        }
        
    }


    render() {
        return (
            <div>
                <Wrapper>
                <EmployeeForm 
                    handleFormSubmit = {this.handleFormSubmit}
                    handleInputChange = {this.handleInputChange}
                    filterByRole = {this.filterByRole}
                    sortByName = {this.sortByName}
                    employees = {this.state.search} />
                <EmployeeCardContainer>
            {this.state.search.map(employee => (
                <EmployeeCard 
                    image = {employee.image}
                    firstName = {employee.firstName}
                    lastName = {employee.lastName}
                    role = {employee.role}
                    employeeId = {employee.employeeId}
                    departmentId = {employee.departmentId} />
                ))} 
                </EmployeeCardContainer>
                </Wrapper>             
            </div>
        )
    }
}
