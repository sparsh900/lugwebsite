import React from "react";
import Upbar from "./Upbar";
import Welcome from "./Welcome";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import Gallery2 from "./Gallery2";
import Foot from "./footerr.js";
import Members from "./Members";

function Lug() {
  return (
    <div>
      <Upbar />
      <Welcome />
      <AboutUs />
      <Gallery />
      <Gallery2 />
      <Members/>
      <Foot />
    </div>
  );
}

export default Lug;
