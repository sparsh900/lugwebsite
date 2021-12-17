import React from "react";
import ReactDOM from "react-dom";
import Lug from "./Lug";
import Personal from './personal';
import ExercisesList from "./f";
import "./style.css";
import UpcomingEvents from "./UpcomingEvents";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateExercise from "./forms";

ReactDOM.render(
  <Router>
    <Switch>
    <Route path="/forms" component={CreateExercise} />
    <Route exact path="/" component={Lug} />
    <Route path="/events" component={UpcomingEvents} />
    <Route path="/home" component={Lug} />
    <Route path="/f" component={ExercisesList}  />
    <Route path="/personal" component={Personal}  />
    </Switch>
  </Router>,

  document.getElementById("root")
);
/*<Route path="/upload" component={FilesUploadComponent}  />
    <Route path="/gallery" component={Gallery}  />
    <Route path="/legend" component={LegendUploadComponent}  /> */