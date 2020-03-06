import React, { Component, Fragment } from "react";
import LoginForm from "../../src/components/LoginForm";

export class Login extends Component {
  render() {
    return (
      <Fragment>
        <h1>Welcome to the login page!</h1>
        <p>You can signUp using our login form:</p>
        <LoginForm />
      </Fragment>
    );
  }
}

export default Login;
