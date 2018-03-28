// import _ from "lodash";
// import React, { Component } from "react";

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { text: "", currentlyDisplayed: this.props };

//     this.onInputChange = this.onInputChange.bind(this);
//   }

//   onInputChange(event) {
//     const surveys = _.filter(this.props, survey => {
//       survey.includes(event.toLowerCase());
//       console.log(survey.includes(event.toLowerCase()))
//     });

//     this.setState({ text: event, surveyList: surveys });
//     console.log(this.props.surveyList);
//     //console.log(event);
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <input
//         value={this.state.term}
//         onChange={event => {
//           this.onInputChange(event.target.value);
//         }}
//         className="searchbar"
//       />
//     );
//   }
// }

// export default SearchBar;
