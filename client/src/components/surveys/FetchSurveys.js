import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSurveys } from "../../actions/surveyActions";

class FetchSurveys extends Component {
  constructor(props) {
    super(props);

    this.state = { search: "" };
  }

  componentDidMount(props) {
    this.props.fetchSurveys();
  }

  renderSurveys(surveys) {
    return surveys.map(survey => {
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
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  render() {
    const surveyList = this.props.surveys.filter(survey => {
      return survey.title.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1;
    });
    console.log(surveyList);
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.search}
            onChange={event => this.updateSearch(event)}
          />
        </div>
        {this.renderSurveys(surveyList)}

        <Link to="/surveys/new" className="btn btn-primary">
          Add Survey
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(FetchSurveys);
