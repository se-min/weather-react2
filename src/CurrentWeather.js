import React from "react";
import SetTime from "./SetTime";
import "./CurrentWeather.css";

 

export default function CurrentWeather(props){
    
    return (
        <section className="Weather">
      <div className="row">
        <div className="col-7 border-end border-2 border-dark">
          <h1 id="city">{props.data.city}</h1> <h3 id="country">, {props.data.country}</h3>
          <br />
          <p id="time" className="date">
            <SetTime timestamp={props.data.cityOffsettoUTC}/>
          </p>
          <span id="currentTemp">{props.data.temp}°</span>{" "}
          <span id="icon">
            <img src= {props.data.icon} alt="Weather Icon" />
          </span>
        </div>
        <div className="col-5 dicription">
          <div className="row">
            <div className="col-1"></div>
            <div className="col" id="discription">
              {props.data.discription}
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">Humidity</div>
            <div className="col" id="humidity">
              {props.data.humidity}%
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">Wind</div>
            <div className="col" id="wind">
              {props.data.wind} km/h
            </div>
          </div>
        </div>
        <div className="col-7 border-end border-2 border-dark"></div>
      </div>
    </section>

    )
}