import React from "react";
import "./Card.css";
import TextLabel from "./TextLabel";
import icon_00 from "./assets/00.png";
import icon_01d from "./assets/01d.png";
import icon_01n from "./assets/01n.png";
import icon_02d from "./assets/02d.png";
import icon_02n from "./assets/02n.png";
import icon_03 from "./assets/03.png";
import icon_04 from "./assets/04.png";
import icon_09 from "./assets/09.png";
import icon_10d from "./assets/10d.png";
import icon_10n from "./assets/10n.png";
import icon_11 from "./assets/11.png";
import icon_13 from "./assets/13.png";
import icon_50 from "./assets/50.png";
import drop from "./assets/drop.png";
import flag from "./assets/flag.png";
import { Link } from "react-router-dom";

export default function Card({ name, temp, humidity, img, wind, onClose, id }) {
  function getIcon(img) {
    switch (img) {
      case "01d":
        return icon_01d;
      case "01n":
        return icon_01n;
      case "02d":
        return icon_02d;
      case "02n":
        return icon_02n;
      case "03d":
        return icon_03;
      case "03n":
        return icon_03;
      case "04d":
        return icon_04;
      case "04n":
        return icon_04;
      case "09d":
        return icon_09;
      case "09n":
        return icon_09;
      case "10d":
        return icon_10d;
      case "10n":
        return icon_10n;
      case "11d":
        return icon_11;
      case "11n":
        return icon_11;
      case "13d":
        return icon_13;
      case "13n":
        return icon_13;
      case "50d":
        return icon_50;
      case "50n":
        return icon_50;

      default:
        return icon_00;
    }
  }

  return (
    <div className="card">
      <Link to={`/city/${id}`} style={{ textDecoration: "none" }}>
        <div className="blackBox">
          <p className="temp">{temp}°</p>
          <p className="name">{name}</p>
        </div>
      </Link>
      <div>
        <div className="whiteBox">
          <div id="closeIcon">
            <button onClick={onClose} className="btn btn-sm btn-danger">
              X
            </button>
          </div>
          <Link to={`/city/${id}`} style={{ textDecoration: "none" }}>
            <img
              className="weatherIcon"
              src={getIcon(img)}
              width="120"
              height="120"
              alt=""
            />
          </Link>
        </div>
        <Link to={`/city/${id}`} style={{ textDecoration: "none" }}>
          <div className="blueBox">
            <TextLabel img={drop} text={humidity} meas="%" />
            <TextLabel img={flag} text={wind} meas="KPH" />
          </div>
        </Link>
      </div>
    </div>
  );
}
