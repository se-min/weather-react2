import React from "react";
import "./Forecast.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import icon from "./img/Sonne.png";

export default function Forecast(){
    return (
        <section className="Forecast">
  <div className="row">
          <div className="col-2" >
            <div>22:00</div>
            <span>24°</span><span className="temp-low" >/20°</span>
            <img src={icon} alt="" />
          
          </div>

          <div className="col-2" >
          <div>01:00</div>
          <span>24°</span><span className="temp-low">/20°</span>
          <img src={icon} alt="" />
          
          </div>

          <div className="col-2" >
          <div>04:00</div>
          <span>24°</span><span className="temp-low" id="lowTemp3">/20°</span>
          <img src={icon} alt="" />
          
          </div>

          <div className="col-2" >
          <div >07:00</div>
          <span >24°</span><span className="temp-low">/20°</span>
          <img src={icon} alt="" />
          
          </div>

          <div className="col-2" >
          <div >10:00</div>
          <span >24°</span><span className="temp-low">/20°</span>
          <img src={icon} alt="" />
          
          </div>

          <div className="col-2" >
          <div >13:00</div>
          <span >24°</span><span className="temp-low" >/20°</span>
          <img src={icon} alt="" />
          
          </div>

  </div>
  </section>
    )
}