import React from 'react';



export default function FormContainer(props) {
    return (
        <div style = {{borderRight : "2px white solid"}} className = "col-3">
            {props.children}
        </div>
    )
}
