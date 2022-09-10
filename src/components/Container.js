import React from "react";
import { useWeather } from "../context/WeatherContext";

function Container(){
    const {weather, gunler} = useWeather();

    return (
        <div className="content">
          <div className="row">
            { weather &&
              (weather.data).map((item, key) => (
                <div key={key} className="col-1 weather" id="container">
                  <div className="dayContainer">
                    <h4>{gunler[new Date(item.datetime).getDay()]}</h4>
                  </div>
  
                  <div className="col-1">
                    <img
                      src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                      className="imgContainer"
                    />
                    <p className="descriptionContainer">
                      {item.weather.description.toUpperCase()}
                    </p>
                    <h1>{Math.floor(item.temp)}°C</h1>
                    <p className="tempContainer">
                      <span>Min:{Math.floor(item.min_temp)}°C</span> {" "}
                      <span> High:{Math.floor(item.max_temp)}°C</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      );

}

export default Container