import React, {Component} from "react";
import axios from "axios";
import $ from "jquery";
import Personal from './personal';
import Popup from "reactjs-popup";
import logo from "./images/logo.png";
import { Link, Redirect } from "react-router-dom";
import ls from 'local-storage';

const port = "http://localhost:5000"
export default class Upbar extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      password: ''
      //user: ''
    }
  }
  onChangeUserName(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    /*userList(){
      return this.state.users.map(user => {
        return user;
      })
    }*/

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(user);

    axios.post('/users/login', user)
      .then(response => {
        if(response.data== true)
        {
          //<ExercisesList/>
          ls.set("user", true)
          window.location="/personal"
          //alert(ls.get("user"));
          //return <Personal />
        }
        else{
          alert("username or password is incorrect");
          ls.set("user", false)
        }
      }).catch(err => {
          console.log(err);
      });
  /*  axios.get('http://localhost:5000/users/').then(response => {
      this.setState({user: response.data})

      if(user.username === this.state.username){
        if(user.password === this.state.password)
        {
          window.location= '/';
        }
        else{
          alert("password is incorrect");
        }
      }
      else{
        alert("username is incorrect");
      }
    }).catch((error) => {
      console.log(error);
    });*/
    //window.location = '/';
  }
  render(){
  return (
    <div>
      <nav
        style={{ width: "100%", paddingLeft: "0%", marginLeft: "0" }}
        className="navbar"
      >
        <div className="left">
          <div className="dropdown">
            <a href="#home">
              <button className="buttons">Home</button>
            </a>
          </div>

          <div className="dropdown">
            <button className="buttons">Events</button>
            <div className="dropdown-content hide">
              <Link to="#">Upcoming Events</Link>
              <a href="#event-gallery">Past Events</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="buttons">Gallery</button>
            <div className="dropdown-content">
              <a href="#event-gallery">Events Gallery</a>
              <a href="#member-gallery">Members Gallery</a>
            </div>
          </div>
        </div>
        <div>
          <div className="dropdown floate">
            <a href="#about">
              <button className="right buttons">About Us</button>
            </a>
          </div>
          <div className="dropdown floate">
            <div className=".modalWrapper">
              <Popup
                contentStyle={{
                  width: "20%",
                  height: "65%",
                  border: ".5rem solid grey",
                }}
                modal
                trigger={<button className="right buttons">Sign In</button>}
              >
                <div className="forms">
                  <div className="EXBO">
                    <b>**EXBO LOGIN**</b>
                    <div>
                      <img src={logo} className="login-logo" alt="logo" />
                    </div>
                  </div>
                  <div className="container" id="form1">
                  <form onSubmit={this.onSubmit}>
                    <input
                      type="text"
                      placeholder="Enter Username"
                      name="uname"
                      value={this.state.username}
                      onChange={this.onChangeUserName}
                      required
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="psw"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      required
                    />

                    <button className="login" type="submit">
                      Login
                    </button>
                    <label className="remm">
                      <input type="checkbox" name="remember" /> Remember me
                    </label>
                    </form>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
}

$(document).scroll(function () {
  if ($(this).scrollTop() > 666) {
    $(".navbar").css("background-color", "black");
  } else {
    $(".navbar").css("background-color", "transparent");
  }
});
