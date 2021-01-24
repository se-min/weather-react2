import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";


export default function Weather() {
  let [submitState, setSubmitState] = useState (false);
  const [weatherData, setWeatherData] =useState(null);
  
  
  const apiKey ="774391238c6a53bc1cf424560a1347de";
  let [city, setCity] = useState("Berlin");
  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  
  function displayWeather(response){
    console.log(response);
    setWeatherData(
      {
      cityOffsettoUTC : response.data.timezone *1000,
      city : response.data.name,
      country : response.data.sys.country,
      temp : Math.round(response.data.main.temp),
      discription:  response.data.weather[0].description,
      humidity :response.data.main.humidity,
      wind : Math.round(response.data.wind.speed *3.6),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    })


    setSubmitState (true)
  }

  function updateCity(){
    axios.get(url).then(displayWeather);
  }
  
  function changeCity(event){
    event.preventDefault();
    updateCity();
  }

  function cityInput(event){
    event.preventDefault();
    setCity(event.target.value);
    
    
  }
  
  if (submitState === true){ 
    
    return (
      <div className ="Weather">
       <header className="Search">
      <div className="row">
        <div className="col">
          <form id="city-form" onSubmit ={changeCity}>
            <input
              id="city-input"
              type="text"
              placeholder="enter city..."
              autoComplete="off"
              onChange = {cityInput}
            />
          </form>
        </div>
        <div class="col">
            <button><i class="fas fa-map-marker-alt"></i></button>
        </div>
        <div className="col unit">
          <a id="tempC" className="unit-used" href="/">
            °C
          </a>
          /
          <a id="tempF" href="/">
            °F
          </a>
        </div>
      </div>
    </header>
                <CurrentWeather data ={weatherData}/>
                </div>
            );

  } else{
    updateCity();
    return ("Loading...");}
}
