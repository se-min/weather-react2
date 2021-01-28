import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SingleForecast from "./SingleForecast";


export default function Forecast(props){
  

  const [state, setState] = useState("loading");
  const [forecast, setForecast] = useState(null);
  const apiKey ="774391238c6a53bc1cf424560a1347de";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  
  function displayForecast(response){
    console.log(response.data.list[0])
    setForecast(response.data.list);
    
    setState("loaded");

  }
  
    if (state === "loading"){
    axios.get(url).then(displayForecast);
    return "loading"
    
  }
  else{
    return (
        <section className="Forecast">
  <div className="row">
          
          <SingleForecast data ={forecast[0]}/>
          <SingleForecast data ={forecast[1]}/>
          <SingleForecast data ={forecast[2]}/>
          <SingleForecast data ={forecast[3]}/>
          <SingleForecast data ={forecast[4]}/>
          <SingleForecast data ={forecast[5]}/>
  </div>
  </section>
    )
    }
}