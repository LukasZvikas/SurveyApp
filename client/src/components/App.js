import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import Header from "./Header";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
           
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
