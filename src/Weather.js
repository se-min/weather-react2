import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import Celsius from "./Celsius";
import Fahrenheit from "./Fahrenheit";
import Forecast from "./Forecast";


export default function Weather() {
  let [submitState, setSubmitState] = useState (false);
  const [weatherData, setWeatherData] =useState(null);
  
  
  const apiKey ="774391238c6a53bc1cf424560a1347de";
  let [city, setCity] = useState("Berlin");
  const [unit, setUnit] = useState ("celsius");
  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  
  function displayWeather(response){
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

  function displayFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");

  }

  function displayCelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }
  function getLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(myPosition);
    

  }
  function myPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(url).then(currentLocation);
    
  }

  function currentLocation(response) {
    console.log(response)
    setCity(response.data.name)
    setSubmitState(false)
        
  }
  
  if (submitState === true){ 
    
    return (
      <div className ="Weather">
       <header className="Search">
      <div className="row">
        <div className="col-6 form">
          <form  onSubmit ={changeCity}>
            <input
              className ="input"
              type="text"
              placeholder="Search city..."
              autoComplete="off"
              onChange = {cityInput}
            
            />
            
          </form>
          <button onClick ={getLocation}><i class="fas fa-map-marker-alt"></i></button>
        </div>
        
        <div className="col unit">
          <a onClick={displayCelsius}  href="/">
            <Celsius unit = {unit}/>
          </a>
          /
          <a onClick= {displayFahrenheit} href="/">
            <Fahrenheit unit = {unit}/>
          </a>
        </div>
      </div>
    </header>
                <CurrentWeather data ={weatherData} unit={unit}/>
               <Forecast city ={weatherData.city} unit = {unit}/>
                </div>
            );

  } else{
    updateCity();
    return ("Working on it...");}
}
