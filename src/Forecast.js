import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SingleForecast from "./SingleForecast";


export default function Forecast(props){
  

  const [state, setState] = useState("loading");
  const [forecast, setForecast] = useState(null);
  const apiKey ="774391238c6a53bc1cf424560a1347de";
  const [city, setCity]= useState(null)
  const [timezone, setTimezone] = useState(null);
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  
  function displayForecast(response){
    setForecast(response.data.list);
    setCity(response.data.city.name);
    setTimezone(response.data.city.timezone);
    
    setState("loaded");

  }
  
    if (state === "loaded"&& props.city === city ){ return(
      <section className="Forecast">
  <div className="row">
          
          <SingleForecast data ={forecast[0]} timezone ={timezone} unit = {props.unit}/>
          <SingleForecast data ={forecast[1]} timezone ={timezone} unit = {props.unit}/>
          <SingleForecast data ={forecast[2]} timezone ={timezone} unit = {props.unit}/>
          <SingleForecast data ={forecast[3]} timezone ={timezone} unit = {props.unit}/>
          <SingleForecast data ={forecast[4]} timezone ={timezone} unit = {props.unit}/>
          <SingleForecast data ={forecast[5]} timezone ={timezone} unit = {props.unit}/>
  </div>
  </section>)
    
    
  }
  else{
    axios.get(url).then(displayForecast);
    return "loading"
    }
}