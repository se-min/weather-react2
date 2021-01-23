import React from "react";
import "./Forecast.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function SetTime(props){
  let localTimestamp = new Date().getTime();
 let localOffsetToUTC = new Date().getTimezoneOffset()*60000;
 

let timestamp = localTimestamp + localOffsetToUTC + props.timestamp;
let now = new Date(timestamp);
let day = now.getDay();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
return (`${dayName[day]} ${hours}:${minutes}`)
}