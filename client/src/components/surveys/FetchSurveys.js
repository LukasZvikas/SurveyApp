import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions/surveyActions";

class FetchSurveys extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return <div>{fetchSurveys}</div>;
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(FetchSurveys);
