import React, {Component} from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
const port = "http://localhost:5000"
export default class Register extends Component {
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
  
      axios.post('/users/add', user)
        .then(response => {
         // if(response.data== true)
          //{
            //<ExercisesList/>
            //ls.set("user", true)
            alert(response.data)
            window.location="/personal"
            //alert(ls.get("user"));
            //return <Personal />
          //}
          //else{
           // alert("username or password is incorrect");
            //ls.set("user", false)
          //}
        }).catch(err => {
            console.log(err);
        });
    
    }
    render(){
        return(
            <div>
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

                    <button type="submit">
                      signup
                    </button>
                   
                    </form>
                    </div>
        )
    }
}