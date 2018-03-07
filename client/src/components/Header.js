import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark ">
        SurveyApp
        <ul className="navbar-nav-custom" />
      </nav>
    );
  }
}

export default Header;
