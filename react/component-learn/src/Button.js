import React from "react"
import "./button.css"

const Button = (props) =>{
    // console.log(props.color);
    // console.log(props.text);
    return(
        <div className={`button-background ${props.color}`}>
           {props.text}
        </div>
    )
};

export default Button;