import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "../actions/authActions";
import { Link } from "react-router-dom";
import Payments from "./Payments";
class Header extends Component {
  renderContent() {
    switch (this.props.auth.authenticated) {
      case true:
        return (
          <div className="header-nav">
            <nav key={1} className="header-nav__credits">
              Credits: {this.props.auth.credits}
            </nav>
            <nav key={2} className="payments">
              <Payments />
            </nav>
            <nav key={3} className="header-nav__logout">
              <Link to="/logout">Log Out</Link>
            </nav>
          </div>
        );

      default:
        return (
          <div className="header-nav">
            <nav key={1} className="header-nav__signin">
              <Link to="/signin">Sign In</Link>
            </nav>
            <nav key={2} className="header-nav__signup">
              <Link to="/signup">Sign Up</Link>
            </nav>
          </div>
        );
    }
  }
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <header className="header-name">
            <Link to="/">SurveyApp</Link>
          </header>

          {this.renderContent()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, authActions)(Header);
