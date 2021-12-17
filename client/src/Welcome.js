import React from "react";
import logo from "./images/logo.png";

function Welcome() {
  return (
    <div className="boxes" id="home">
      <div id="leftbox">
        <img className="log" src={logo} alt="hi user" />
      </div>
      <div id="rightbox">
        <div className="anime">
          <h1>LINUX</h1>
          <h1> USER</h1>
          <h1>GROUP</h1>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
