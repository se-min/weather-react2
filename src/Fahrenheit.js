import React from "react"

export default function Fahrenheit(props){
    if (props.unit === "fahrenheit"){
        return(
          <span className="unit-used">°F</span>
        )
    }else {
        return "°F"
    }
}