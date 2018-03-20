import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <Link to="/surveys/new" className="btn btn-primary" >Add Survey</Link>
      </div>
    );
  }
}

export default Dashboard;
