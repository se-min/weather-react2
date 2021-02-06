import React from "react";
import "./App.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Subtext from "./Subtext";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />
        
        
      </div>
      <Subtext />
    </div>
  );
}
