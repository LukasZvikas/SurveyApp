import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./surveyFormReview";

class SurveyNew extends Component {
  constructor(props) {
    super(props);

    this.state = { surveyState: false };
  }

  renderContent() {
  	console.log(this.state)
    if (this.state.surveyState) {
       return <SurveyFormReview onCancel={() => this.setState({ surveyState: false })} />;
    } 
    else {
       return <SurveyForm onNext={() => this.setState({ surveyState: true })} />;
      
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default SurveyNew;
