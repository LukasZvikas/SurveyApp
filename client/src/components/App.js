import React, { Component } from "react";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Logout from "./authentication/Logout";
import SurveyNew from "./surveys/SurveyNew";
import history from "../utilities/history";
import { Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/logout" component={Logout} />
              <Route path="/surveys/new" component={SurveyNew} />            
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;