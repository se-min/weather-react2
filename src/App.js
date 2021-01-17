import React from "react";
import "./App.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather />
      </div>
    </div>
  );
}
