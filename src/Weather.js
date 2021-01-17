import React from "react";
import "./Weather.css";
import icon from "./img/Sonne.png";

export default function Weather() {
  return (
    <section className="Weather">
      <div className="row">
        <div className="col-7 border-end border-2 border-dark">
          <h1 id="city">Berlin</h1> <h3 id="country">, Germany</h3>
          <br />
          <p id="time" className="date">
            Monday 13:24
          </p>
          <span id="currentTemp">29°</span>{" "}
          <span id="icon">
            <img src={icon} alt="" />
          </span>
        </div>
        <div className="col-5">
          <div className="row">
            <div className="col-1"></div>
            <div className="col" id="discription">
              sunny
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">Humidity</div>
            <div className="col" id="humidity">
              20%
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">Wind</div>
            <div className="col" id="wind">
              10 km/h
            </div>
          </div>
        </div>
        <div className="col-7 border-end border-2 border-dark"></div>
      </div>
    </section>
  );
}
