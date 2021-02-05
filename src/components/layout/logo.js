import React from "react";
import logo from "../layout/logo.jpg"
import  "./style.css";

const Logo=()=>{
    return(
        // <logo/>
        // <h1>as</h1>
        <img className="logoImage" src={logo}></img>
    );
}
export default Logo;