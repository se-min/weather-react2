import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <header className="Search">
      <div className="row">
        <div className="col">
          <form id="city-form">
            <input
              id="city-input"
              type="text"
              placeholder="enter city..."
              autoComplete="off"
            />
          </form>
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
  );
}
