import React from "react";


function Wrapper(props) {
  return (
  <div className = "mx-auto" style = {{width : "1480px", }}>
    <div className = "row">
    {props.children}
    </div> 
  </div>
  )
}

export default Wrapper;
