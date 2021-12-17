import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ls from 'local-storage';
import axios from 'axios';
const port = process.env.PORT || "http://localhost:5000"
const Exercise = props => (
  <tr>
    <td style={{color: "white"}}>{props.exercise.name}</td>
    <td style={{color: "white"}}>{props.exercise.rollno}</td>
    <td style={{color: "white"}}>{props.exercise.branch}</td>
    <td style={{color: "white"}}>{props.exercise.email}</td>
    <td style={{color: "white"}}>{props.exercise.phoneno}</td>
    <td style={{color: "white"}}>{props.exercise.year}</td>

  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    //this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    alert(ls.get("user"));

    if(!ls.get("user")){
      window.location="/"
    }
    else{



    axios.get('/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })

    }
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th style={{color: "white"}}>NAME</th>
              <th style={{color: "white"}}>ROLLNO</th>
              <th style={{color: "white"}}>BRANCH</th>
              <th style={{color: "white"}}>EMAIL</th>
              <th style={{color: "white"}}>PHONENO</th>
              <th style={{color: "white"}}>YEAR</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}
