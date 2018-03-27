import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSurveys } from "../../actions/surveyActions";

class FetchSurveys extends Component {
  renderSurveys(surveys) {
    return _.map(surveys, survey => {
      return (
        <div className="survey" key={survey._id}>
          <h2 className="survey__label">SURVEY TITLE: {survey.title}</h2>
          <div className="survey__subject">
            SUBJECT: {survey.subject}
          </div>
          <div className="survey__content">CONTENT: {survey.body}</div>
          <div className="survey__answer">YES: {survey.yes}</div>
          <div className="survey__answer">NO: {survey.no}</div>
        </div>
      );
    });
  }

  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    console.log(this.surveys);
    return (
      <div className="form-container dashboard">
        <div className="heading-primary dashboard">Your Surveys</div>
        {this.renderSurveys(this.props.surveys.surveyList)}

        <Link to="/surveys/new" className="btn-submit add">
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
