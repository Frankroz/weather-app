import "./TextLabel.css"
import React from "react";

export default class TextLabel extends React.Component {
  render() {
    return (
      <div className="label-container">
        <img className="label-img" src={this.props.img} alt=""/>
        <div>
          <p className="label-text">{this.props.text}</p>
          <p className="label-meas">{this.props.meas}</p>
        </div>
      </div>
    );
  }
}