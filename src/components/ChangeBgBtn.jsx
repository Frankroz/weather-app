import React from "react";
import "./ChangeBgBtn.css";
import { MdLightbulb } from "react-icons/md";

export default class ChangeBgBtn extends React.Component {
  render() {
    return (
      <div>
        <button
          className="ChangeBtn"
          onClick={() => {
            var r = document.querySelector("body");
            var rs = getComputedStyle(r);
            var temp = rs.getPropertyValue("--bg-color");
            r.style.setProperty("--bg-color", rs.getPropertyValue("--text-color"));
            r.style.setProperty("--text-color", temp);
            r.style.setProperty("transition", "0.5s");
          }}
        >
          <MdLightbulb size="1.5rem" />
        </button>
      </div>
    )
  }
} 