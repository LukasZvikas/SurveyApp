import React, { Component } from "react";
import { connect } from "react-redux";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Logout from "./authentication/Logout";
import SurveyNew from "./surveys/SurveyNew";
import history from "../utilities/history";
import { Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import * as authActions from "../actions/authActions";
=======
import {fetchUser} from "../actions/authActions";
>>>>>>> sass

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
<<<<<<< HEAD
    console.log(this.props);
=======
    console.log(this.props)
>>>>>>> sass
  }

  renderContent() {
    switch (this.props.auth.authenticated) {
      case true:
        return (
<<<<<<< HEAD
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
      default:
        return (
=======
>>>>>>> sass
          <div>
            <Router history={history}>
              <div>
                <Header />
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/signin" component={SignIn} />
<<<<<<< HEAD
                  <Route path="/surveys/new" component={SignIn} />
=======
                  <Route path="/logout" component={Logout} />
                  <Route path="/surveys/new" component={SurveyNew} />
>>>>>>> sass
                </Switch>
              </div>
            </Router>
          </div>
        );
<<<<<<< HEAD
=======
      default:
        return (
          <div>
            <Router history={history}>
              <div>
                <Header />
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/signin" component={SignIn} />
                  <Route path="/surveys/new" component={SignIn} />
                </Switch>
              </div>
            </Router>
          </div>
        );
>>>>>>> sass
    }
  }

  render() {
<<<<<<< HEAD
=======

>>>>>>> sass
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

<<<<<<< HEAD
export default connect(mapStateToProps, authActions)(App);
=======
export default connect(mapStateToProps, {fetchUser})(App);
>>>>>>> sass
