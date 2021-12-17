
import React from "react";
import { Link } from "react-router-dom";
import CreateExercise from "./forms"
import logo from "./images/logo.png";
import poster from "./images/poster.jpg";
import poster2 from "./images/poster2.jpg";
import poster3 from "./images/poster3.jpg";

//import RegisterForm from "./forms";
// import $ from "jquery";

// $(document).ready(function (e) {
//   $("#eve2").hide();
//   $("#eve3").hide();
// });

function Eve() {
  return (
    <div>
      <div id="eve1">
        <div id="eve">
          <img src={poster} alt="click" className="pic" />
          <img src={poster} alt="click" className="pic" />
          <img src={poster} alt="click" className="pic" />
        </div>

        <div>
          <button className="Register" onClick={Formdata}>
            Register for Event 1
          </button>
        </div>
      </div>

      <div id="formm">
      <CreateExercise />
      </div>

      <div id="eve2">
        <div id="eve">
          <img src={poster2} alt="click" className="pic" />
          <img src={poster2} alt="click" className="pic" />
          <img src={poster2} alt="click" className="pic" />
        </div>
        <div>
          <button className="Register" onClick={Formdata}>
            Register for Event 2
          </button>
        </div>
      </div>
      <div id="eve3">
        <div id="eve">
          <img src={poster3} alt="click" className="pic" />
          <img src={poster3} alt="click" className="pic" />
          <img src={poster3} alt="click" className="pic" />
        </div>
        <div>
          <button className="Register" onClick={Formdata}>
            Register for Event 3
          </button>
        </div>
      </div>
    </div>
  );
}

function UpcomingEvents() {
  return (
    <div className="motion">
      <div className="bar">
        <div className="boxx">
          <Link to="/home">
            <img src={logo} alt="home" className="page2" />
          </Link>
        </div>
        <div className="box2">
          <div className="head1">
            <button className="barr button1" onClick={Toggle}>
              Event1:
            </button>
          </div>
          <div className="head1">abcde</div>

          <div className="head2">
            <u>Details</u>
          </div>
          <div className="head3">Date:10/8/2020</div>
          <div className="head3">Time:5:00pm</div>
          <div className="head3">Venue:Tan</div>
          <div className="head1">
            <button className="barr button2" onClick={Toggle2}>
              Event2:
            </button>
          </div>
          <div className="head1">abcde</div>

          <div className="head2">
            <u>Details</u>
          </div>
          <div className="head3">Date:10/8/2020</div>
          <div className="head3">Time:5:00pm</div>
          <div className="head3">Venue:Tan</div>
          <div>
            <div className="head1">
              <button className="barr button3" onClick={Toggle3}>
                Event3:
              </button>
            </div>
            <div className="head1">mnopqrt</div>

            <div className="head2">
              <u>Details</u>
            </div>
            <div className="head3">Date:10/8/2020</div>
            <div className="head3">Time:5:00pm</div>
            <div className="head3">Venue:Tan</div>
          </div>
        </div>
      </div>
      <div className="bar2">
        <div className="header-2">UPCOMING EVENTS</div>
        <div>
          <Eve />
        </div>
      </div>
    </div>
  );
}
function Toggle() {
  document.getElementById("eve2").style.display = "none";
  document.getElementById("eve3").style.display = "none";
  document.getElementById("formm").style.display = "none";
  document.getElementById("eve1").style.display = "block";
  //document.getElementById("eve").style.display = "block";
}
function Toggle2() {
  document.getElementById("eve1").style.display = "none";
  document.getElementById("eve3").style.display = "none";
  document.getElementById("eve2").style.display = "block";
  document.getElementById("formm").style.display = "none";
}

function Toggle3() {
  document.getElementById("eve2").style.display = "none";
  document.getElementById("eve1").style.display = "none";
  document.getElementById("eve3").style.display = "block";
  document.getElementById("formm").style.display = "none";
}
function Formdata() {
  document.getElementById("formm").style.display = "block";
  document.getElementById("eve1").style.display = "none";
  document.getElementById("eve2").style.display = "none";
  document.getElementById("eve3").style.display = "none";
}

export default UpcomingEvents;
