import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import City from "./components/City";
import ChangeBgBtn from "./components/ChangeBgBtn";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function App() {
  const [cities, setCities] = useState([]);

  function getFirstCities () {
    const start_cities = ["Bogota", "London", "Paris", "Buenos Aires", "Tel Aviv", "San Salvador"];
    for (const city of start_cities) {
      onSearch(city);
    }
  }

  function onSearch(city) {
    if (city.length < 1 || city === undefined) {
      alert("You must enter a city");
      return;
    }

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((r) => r.json())
      .then((r) => {
        if (r.main !== undefined) {
          const city = {
            min: Math.round(r.main.temp_min),
            max: Math.round(r.main.temp_max),
            img: r.weather[0].icon,
            id: r.id,
            wind: r.wind.speed,
            temp: Math.round(r.main.temp),
            name: r.name,
            weather: r.weather[0].main,
            clouds: r.clouds.all,
            lat: Math.round(r.coord.lat * 100)/100,
            lon: Math.round(r.coord.lon * 100)/100,
            humidity: r.main.humidity,
          };

          setCities((oldCities) => [...oldCities, city]);
        } else {
          alert("City couldn't be found");
        }
      });
  }

  useEffect(getFirstCities, []);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <div className="App">
              <Nav onSearch={onSearch} />
              <Cards cities={cities} onClose={onClose} />
            </div>
            <div style={{ position: "fixed", bottom: "10px", left: "10px" }}>
              <ChangeBgBtn />
            </div>
          </>
        )}
      />
      <Route
        path="/about"
        render={() => (
          <>
            <div className="App">
              <Nav onSearch={onSearch} />
              <About />
            </div>
            <div style={{ position: "fixed", bottom: "10px", left: "10px" }}>
              <ChangeBgBtn />
            </div>
          </>
        )}
      />
      <Route
        exact
        path="/city/:id"
        render={({ match }) => (
          <>
            <div className="App">
              <Nav onSearch={onSearch} />
              <City city={onFilter(match.params.id)} />
            </div>
            <div style={{ position: "fixed", bottom: "10px", left: "10px" }}>
              <ChangeBgBtn />
            </div>
          </>
        )}
      />
    </Switch>
  );
}
