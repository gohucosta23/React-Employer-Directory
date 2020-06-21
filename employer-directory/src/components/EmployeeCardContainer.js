import React from "react";


function EmployeeCardContainer(props) {
    return (
        <div className="col-9">
            <div className="container">
               {props.children}
            </div>
        </div>
    );
}

export default EmployeeCardContainer;