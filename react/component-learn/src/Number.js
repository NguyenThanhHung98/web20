import React from "react"
import './number.css'

const Number = (props) =>{
    return(
        <div className="number">
            {props.couter}
        </div>
    )
}

export default Number;