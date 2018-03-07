import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "../actions/authActions";
import { Link } from "react-router-dom";

class Header extends Component {

  renderContent() {
    console.log(this.props.auth)
    switch (this.props.auth.authenticated) {
      case true:
        return ;
         
      default:
        return [
          <li key={1} className="nav-item">
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
          </li>,
          <li key={2} className="nav-item">
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark ">
        <Link to="/" className="navbar-brand">
          SurveyApp
        </Link>
        <ul className="navbar-nav-custom">{this.renderContent()}</ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
    
  };
}

export default connect(mapStateToProps, authActions)(Header);