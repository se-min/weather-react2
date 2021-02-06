import React from "react";

export default function SingleForecast (props){
    

    
    let forecastTime = new Date(props.data.dt*1000).getTime();
    let cityOffsettoUTC = props.timezone *1000;
    let time = new Date (forecastTime + cityOffsettoUTC).getHours();
    
    let tempMin = Math.round(props.data.main.temp_min);
    let tempMax = Math.round(props.data.main.temp_max);
    let tempMinFahrenheit = Math.round(tempMin * 9/5 + 32);
    let tempMaxFahrenheit = Math.round(tempMax * 9/5 + 32);
    let icon= `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    if (props.unit === "celsius"){
    return(
        <div className="col-2" >
          <div>{time}:00</div>
          <span>{tempMax}°</span><span className="temp-low">/{tempMin}°</span>
          <img src={icon} alt="" />
          
          </div>
    )
    }
    else{return(
        <div className="col-2" >
          <div>{time}:00</div>
          <span>{tempMaxFahrenheit}°</span><span className="temp-low">/{tempMinFahrenheit}°</span>
          <img src={icon} alt="" />
          
          </div>
    )

    }
}