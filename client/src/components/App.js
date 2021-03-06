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
import Alert from "react-s-alert";
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class App extends Component {
  renderContent() {
    switch (this.props.auth.authenticated) {
      case true:
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
                  <Route path="/logout" component={Logout} />
                  <Route path="/surveys/new" component={SurveyNew} />
                </Switch>
              </div>
            </Router>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
        <Alert stack={{ limit: 3 }} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(App);
