import React, { Component } from 'react';
import employeeList from "../../employeeList.json";
import EmployeeCard from "./EmployeeCard";
import EmployeeForm from "../FormComponents/EmployeeForm";
import Wrapper from "../StyleComponents/Wrapper";
import EmployeeCardContainer from "./EmployeeCardContainer";
import FormContainer from "../FormComponents/FormContainer";



export default class Employee extends Component {

    state = {
        search : employeeList,
        searchId : ""
    }

    message = () => {
        return (
            <h1>No Employees with that Id... </h1>
        );
    }
   
    handleInputChange = (event) => {

        const {name, value} = event.target;

        this.setState({
            [name] : value  
        });
    
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        
        const employeeById = employeeList.filter(employee => employee.employeeId === parseInt(this.state.searchId));
        console.log(employeeById)
        
            this.setState({
                search : employeeById,
                searchId : " "
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

        const sortByName = employeeList.sort((a, b) => (a[option].charAt(0) > b[option].charAt(0)) ? 1 : -1);
            this.setState({
                search : sortByName
        })
    }


    render() {
        return (
            <div>
                <Wrapper>
                    <FormContainer>
                        <EmployeeForm 
                            handleFormSubmit = {this.handleFormSubmit}
                            handleInputChange = {this.handleInputChange}
                            filterByRole = {this.filterByRole}
                            sortByName = {this.sortByName}/>
                    </FormContainer>
                    {this.state.search.length === 0 ? 
                    <div className = "mx-auto" style = {{border : "3px groove white", padding : "170px"}}>
                        <h1><strong>NO EMPLOYEES WITH THAT ID...</strong> </h1></div> : 
                        <EmployeeCardContainer>
                        {this.state.search.map(employee => (
                            <EmployeeCard 
                                key = {employee.employeeId}
                                image = {employee.image}
                                firstName = {employee.firstName}
                                lastName = {employee.lastName}
                                role = {employee.role}
                                employeeId = {employee.employeeId}
                                departmentId = {employee.departmentId} />
                            ))} 
                        </EmployeeCardContainer>
                    }
                    
                </Wrapper>             
            </div>
        )
    }
}
