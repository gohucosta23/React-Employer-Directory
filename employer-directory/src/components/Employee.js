import React, { Component } from 'react';
import employeeList from "../employeeList.json";
import EmployeeCard from "./EmployeeComponents/EmployeeCard";
import EmployeeForm from "./FormComponents/EmployeeForm";
import Wrapper from "./Wrapper";
import EmployeeCardContainer from "./EmployeeComponents/EmployeeCardContainer";
import FormContainer from "./FormComponents/FormContainer";
// import SortFunction from './FormComponents/SortFunction';


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
        
        const employeeById = employeeList.filter(employee => employee.employeeId === parseInt(this.state.searchId));
        if(employeeById === "[]"){
        }
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
       
        

            const sortByName = employeeList.sort((a, b) => (a[option].charAt(0) > b[option].charAt(0)) ? 1 : -1);
            this.setState({
                search : sortByName
        })

        // else if(option === "lastName") {
        //     const sortByName = employeeList.sort((a, b) => (a.lastName.charAt(0) > b.lastName.charAt(0)) ? 1 : -1);
        //     this.setState({
        //         search : sortByName
        // })
        // }
        
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
                            sortByName = {this.sortByName}
                            employees = {this.state.search} />
                    </FormContainer>
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
