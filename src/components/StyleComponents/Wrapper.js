import React from "react";
import backgroundImage from "../../images/eBackground.jpg";

const styles = {
  wrapper : {
    width : "1500px",
    backgroundImage : `url(${backgroundImage})`,
    padding : "70px"
  }
}

function Wrapper(props) {
  return (
  <div className = "mx-auto rounded" style = {styles.wrapper}>
    <div className = "row">
    {props.children}
    </div> 
  </div>
  )
}

export default Wrapper;
