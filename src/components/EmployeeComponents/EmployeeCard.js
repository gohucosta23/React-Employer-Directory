import React from "react";

const styles = {
    cards : {
        float : "left",
        width : "230px"
    }
}


export default function propsCard(props) {


    return (
                <div className="card mr-3 mb-2" style = {styles.cards}>
                    <img src={props.image} className="card-img-top" alt={props.firstName +" "+ props.lastName} width="300px" height="300px" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.firstName +" "+ props.lastName}</h5>
                        <p className="card-text">Role :{props.role}</p>
                        <p className="card-text">Employee Id : {props.employeeId}</p>
                        <p className="card-text">Department Id : {props.departmentId}</p>
                    </div>
                </div>
    );
}
