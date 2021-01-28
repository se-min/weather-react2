import React from "react";
import icon from "./img/Sonne.png";

export default function SingleForecast (props){
    console.log(props)
    let tempMin = Math.round(props.data.main.temp_min);
    let tempMax = Math.round(props.data.main.temp_max);
    
    return(
        <div className="col-2" >
          <div>01:00</div>
          <span>{tempMax}°</span><span className="temp-low">/{tempMin}°</span>
          <img src={icon} alt="" />
          
          </div>
    )
}