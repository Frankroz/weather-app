import React from "react";
import './City.css';

export default function City({ city }) {
  if (city == null) {
    return (
      <div className="ciudad">
        <h2>City not found</h2>
      </div>
    );
  }
  
  return (
    <div className="ciudad">
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.lat}º</div>
          <div>Longitud: {city.lon}º</div>
        </div>
      </div>
    </div>
  );
}
