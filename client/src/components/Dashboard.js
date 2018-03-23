import React, { Component } from "react";
import { Link } from "react-router-dom";
import FetchSurveys from "./surveys/FetchSurveys";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <FetchSurveys /> 
        <Link to="/surveys/new" className="btn btn-primary" >Add Survey</Link>
      </div>
    );
  }
}

export default Dashboard;
