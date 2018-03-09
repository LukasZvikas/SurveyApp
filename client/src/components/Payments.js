import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import * as paymentActions from "../actions/paymentActions";
import { connect } from "react-redux";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="SurveyApp"
        description="5 credits from 5 dollars"
        amount={500}
        token={token => 
          this.props.SendStripeToken(token)
        }
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn btn-primary">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, paymentActions)(Payments);