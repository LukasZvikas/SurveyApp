import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSurveys } from "../../actions/surveyActions";
import SearchBar from "./surveySearchBar";
import store from "../../reducers/index";

class FetchSurveys extends Component {
  constructor(props) {
    super(props);

    this.state = { search: "", currentlyDisplayed: "" };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentlyDisplayed: nextProps.surveys });
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

  componentDidMount(props) {
    this.props.fetchSurveys();
    this.setState({ search: "" });
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    const surveyList = this.props.surveys.filter(survey => {
      return survey.title.indexOf(this.state.search);
    });
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
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
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(FetchSurveys);
