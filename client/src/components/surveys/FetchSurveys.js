import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSurveys } from "../../actions/surveyActions";

class FetchSurveys extends Component {
  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <div className="jumbotron" key={survey._id}>
          <h2>Survey Title: {survey.title}</h2>
          <div>Survey Subject: {survey.subject}</div>
          <div>Survey Content: {survey.body}</div>
          <div>Yes: {survey.yes}</div>
          <div>No: {survey.no}</div>
        </div>
      );
    });
  }

  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
        
        <Link to="/surveys/new" className="btn btn-primary">
          Add Survey
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(FetchSurveys);
