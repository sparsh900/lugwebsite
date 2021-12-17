import React, { Component } from "react";
import Asset from "./images/Asset.png";

export default class Members extends Component {
  render() {
    return (
      <div className="back-carousel" id="member-gallery">
        <div className="header-carousel">ROOT USERS</div>
        <img className="members" src={Asset} />
      </div>
    );
  }
}
