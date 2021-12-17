/*import React, { Component } from "react";
import axios from 'axios';
const port = process.env.PORT || "http://localhost:5000"
export default class userform extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    /*this.onChangeBranch = this.onChangeBranch.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onSubmit = this.onSubmit.bind(this);*/

   /* this.state = {
      username: '',
      password: ''
    }
  }

  /*componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }*/

  /*onChangeUserName(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  /*onChangeBranch(e) {
    this.setState({
      branch: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePhoneNo(e) {
    this.setState({
      phoneno: e.target.value
    })
  }
  onChangeYear(e) {
    this.setState({
      year: e.target.value
    })
  }*/

  /*onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(user);

    axios.post(port + '/users/login', user)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  return (
    <div>
      <div className="container">
      <form onSubmit={this.onSubmit}>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input type="text"
        required
         placeholder="Enter Username"
          value={this.state.username}
          onChange={this.onChangeUserName}  />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          required
          placeholder="Enter Password"
          value={this.state.password}
          onChange={this.onChangePassword}

        />

        <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}*/
