import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as surveyActions from "../../actions/surveyActions";
import searchLogo from "../../img/magnifying-glass.svg";
import trashLogo from "../../img/trash.svg";
import Footer from "../footer";

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
      console.log(survey)
      return (
        <div className="survey" key={survey._id}>
          <h2 className="survey__label">SURVEY TITLE: {survey.title}</h2>
          <div className="survey__subject">SUBJECT: {survey.subject}</div>
          <div className="survey__content">CONTENT: {survey.body}</div>
          <div className="survey__answer">YES: {survey.yes}</div>
          <div className="survey__answer">NO: {survey.no}</div>
          <button
            className="survey__button"
            onClick = {() => {this.props.deleteSurvey(survey)}}
          >
            <img className="survey__icon" src={trashLogo} />
          </button>
        </div>
      );
    });
  }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  render() {

    console.log(this.props);
    const surveyList = this.props.surveys.filter(survey => {
      return (
        survey.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !=
        -1
      );
    });
    return (
      <div className="form-container dashboard">
        <div className="heading-primary dashboard">Your Surveys</div>

        <div className="search">
          <input
            className="search__input"
            type="text"
            value={this.state.search}
            onChange={event => this.updateSearch(event)}
            placeholder="Search for Title"
          />

          <img className="search__icon" src={searchLogo} />
        </div>
        {this.renderSurveys(surveyList)}

        <Link to="/surveys/new" className="btn-submit add">
          Add Survey
        </Link>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, surveyActions)(FetchSurveys);
