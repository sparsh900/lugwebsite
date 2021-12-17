import React from "react";
import logo from "./images/logo.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import likednin from "./images/likednin.png";

function Foot() {
  return (
    <div>
      <div className="footer">
        <div id="one">
          <img className="last" src={logo} alt="click" />
          <div style={{ fontSize: "1.5vw" }}>
            To Know More About Us,
            <a href="#about">click</a>here
          </div>
        </div>
        <div id="three">
          <div className="address">Contact Us</div>
          <div className="address-footer">+91 9780032275</div>

          <div className="address-footer">Email:lugtu@thapar.edu</div>
        </div>
        <div id="two">
          <div className="address">Address</div>
          <div className="address-footer">
            Thapar Institute of Engineering and Technology
          </div>
          <div className="address-footer">Patiala,147001</div>
        </div>
      </div>
      <hr
        style={{
          color: "white",
          backgroundColor: "grey",
          height: 2,
          alignItems: "center",
        }}
      />

      <div>
        <div className="copyright address-footer">
          copyright @LINUX USER GROUP
        </div>
        <div className="connect">
          <div id="links">
            <div className="address">Connect with us.</div>
            <div id="social-icons">
              <a href="https://www.facebook.com/LinuxUsrGrp.ThaparUniversity">
                <img src={facebook} alt="A facebook icon" />
              </a>
              <a href="https://www.linkedin.com/company/lugtiet">
                <img src={likednin} alt="A linkedin icon" />
              </a>
              <a href="https://www.instagram.com/linux_user_group_tiet/">
                <img src={instagram} alt="An instagram icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot;
