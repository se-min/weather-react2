import React, { useState } from "react";
import "./Weather.css";
import icon from "./img/Sonne.png";
import axios from "axios";
import SetTime from "./SetTime";


export default function Weather() {
  let [submitState, setSubmitState] = useState (false);
  const [weatherData, setWeatherData] =useState(null);
  
  
  const apiKey ="774391238c6a53bc1cf424560a1347de";
  let city = "Berlin";
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
      wind : Math.round(response.data.wind.speed *3.6)
    })

    setSubmitState (true)
  }
  
  
  if (submitState === true){ 
    
    return (
        <section className="Weather">
      <div className="row">
        <div className="col-7 border-end border-2 border-dark">
          <h1 id="city">{weatherData.city}</h1> <h3 id="country">, {weatherData.country}</h3>
          <br />
          <p id="time" className="date">
            <SetTime timestamp={weatherData.cityOffsettoUTC}/>
          </p>
          <span id="currentTemp">{weatherData.temp}°</span>{" "}
          <span id="icon">
            <img src={icon} alt="" />
          </span>
        </div>
        <div className="col-5 dicription">
          <div className="row">
            <div className="col-1"></div>
            <div className="col" id="discription">
              {weatherData.discription}
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">Humidity</div>
            <div className="col" id="humidity">
              {weatherData.humidity}%
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">Wind</div>
            <div className="col" id="wind">
              {weatherData.wind} km/h
            </div>
          </div>
        </div>
        <div className="col-7 border-end border-2 border-dark"></div>
      </div>
    </section>

  );
  } else{
    axios.get(url).then(displayWeather);
    return ("Loading...");}
}
