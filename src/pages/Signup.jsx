import React, { Component } from "react";
import SignupForm from "../components/SignupForm";

export class Signup extends Component {
  render() {
    return (
      <section>
        <h1>Welcome to the signuppage!</h1>
        <p>Here comes the Signup Page</p>
        <SignupForm />
      </section>
    );
  }
}

export default Signup;
