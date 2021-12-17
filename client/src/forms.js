import React, { Component } from 'react';
import axios from 'axios';
const port = "http://localhost:5000"

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRollNo = this.onChangeRollNo.bind(this);
    this.onChangeBranch = this.onChangeBranch.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      rollno: '',
      branch: '',
      email: '',
      phoneno: '',
      year: '',
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

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeRollNo(e) {
    this.setState({
      rollno: e.target.value
    })
  }
  onChangeBranch(e) {
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
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      name: this.state.name,
      rollno: this.state.rollno,
      branch: this.state.branch,
      email: this.state.email,
      phoneno: this.state.phoneno,
      year: this.state.year
    }

    console.log(exercise);

    axios.post('/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
    <div className="obox">
      <div className="ibox">
        <div className="heading">Register</div>

      <form onSubmit={this.onSubmit}>
      <div className="boxone" id="form2">
        <div>
          <input  type="text"
              required
              placeholder="ENTER YOUR NAME"
              value={this.state.name}
              onChange={this.onChangeName}
              />
              <input  type="text"
                  required
                  placeholder="ENTER YOUR ROLL NO"
                  value={this.state.rollno}
                  onChange={this.onChangeRollNo}
                  />
                  <input  type="text"
                      required
                      placeholder="ENTER YOUR BRANCH"
                      value={this.state.branch}
                      onChange={this.onChangeBranch}
                      />
                      </div>
                      </div>
                      <div className="boxtwo" id="form2a">
                        <div>
                      <input  type="email"
                          required
                          placeholder="ENTER YOUR EMAIL"
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                          />
                          <input  type="number"
                              required
                              placeholder="ENTER YOUR PHONE NO"
                              value={this.state.phoneno}
                              onChange={this.onChangePhoneNo}
                              />
                              <input  type="text"
                                  required
                                  placeholder="ENTER YOUR YEAR"
                                  value={this.state.year}
                                  onChange={this.onChangeYear}
                                  />

          <input type="submit" value="REGISTER" className="reg" />
        </div>
        </div>
      </form>
      </div>
      <div className="lbox">
        <div className="content-1">Hi,</div>
        <div className="content">You are</div>
        <div className="content">just one </div>
        <div className="content-2">step away</div>
      </div>
    </div>
  </div>
    )
  }
}
//------------------------------------------------------------------------

/*render() {
  return (
    <div>
      <div className="obox">
        <div className="ibox">
          <div className="heading">Register</div>
          <div className="boxone" id="form2">
            <div>
              <input
                type="text"
                placeholder="ENTER YOUR NAME"
                name="uname"
                required
              />
              <input
                type="text"
                placeholder="ENTER YOUR ROLL NO."
                name="uname"
                required
              />
              <input
                type="text"
                placeholder="ENTER YOUR BRANCH"
                name="uname"
                required
              />
            </div>
          </div>
          <div className="boxtwo" id="form2a">
            <div>
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                name="uname"
                required
              />
              <input
                type="number"
                placeholder="ENTER YOUR PHONE NO."
                name="uname"
                required
              />
              <input
                type="number"
                placeholder="ENTER YOUR YEAR"
                name="uname"
                required
              />
              <button className="reg">Register</button>
            </div>
          </div>
        </div>
        <div className="lbox">
          <div className="content-1">Hi,</div>
          <div className="content">You are</div>
          <div className="content">just one </div>
          <div className="content-2">step away</div>
        </div>
      </div>
    </div>
  );
}
export default RegisterForm;*/
