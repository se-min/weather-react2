import React from "react";

export default function Celsius (props){
    if (props.unit === "celsius"){
        return (
            <span className="unit-used">°C</span>
        )

    }
    else { 
        return (
            "°C"
        )
    }
}