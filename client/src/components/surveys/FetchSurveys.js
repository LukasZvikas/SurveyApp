import React, { Component } from "react";
import { connect } from "react-redux";
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
  	console.log(this.props.surveys)
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys};
}

export default connect(mapStateToProps, { fetchSurveys })(FetchSurveys);
