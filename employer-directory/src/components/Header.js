import React from 'react';
import banner from "../images/banner.png";

const styles = {
    banner : {
        width : "100%",
        height : "200px"
    },
    box : {
        padding : "20px"
    }
}

export default function Header() {
    return (
        <div style = {styles.box}>
            <img className = "rounded" style = {styles.banner} src = {banner} alt = "banner"/>
        </div>

    )
}
