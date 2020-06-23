import React from "react";


export default function EmployeeCardContainer(props) {
    return (
        <div className="col-9">
            <div>
               {props.children}
            </div>
        </div>
    );
}

