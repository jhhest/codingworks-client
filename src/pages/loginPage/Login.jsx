import React, { Component, Fragment } from "react";
import LoginForm from "../../pages/loginPage/LoginForm";

export class Login extends Component {
  render() {
    return (
      <Fragment>
        <h1>Login</h1>
        <p>Please fill in your credentials</p>
        <LoginForm />
      </Fragment>
    );
  }
}

export default Login;
