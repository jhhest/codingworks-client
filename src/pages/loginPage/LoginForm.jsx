import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/auth/action";

export class Login extends Component {
  state = {
    userName: "",
    password: ""
  };

  handleChangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    const { userName, password } = this.state;
    this.props.login(userName, password, this.props.history);
  };

  render() {
    return (
      <section>
        <h2>Login</h2>
        <p>Please Login to proceed</p>
        <form onSubmit={this.handleLogin}>
          <p>
            actions
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={this.handleChangeInput}
              required
            />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChangeInput}
              required
            />
          </p>
          <p>
            <input type="submit" value="login" />
          </p>
        </form>
        <p>Don't have an account yet?</p>
        <p>
          Please <Link to="/signup">signup</Link>.
        </p>
      </section>
    );
  }
}

export default connect(() => ({}), { login })(Login);
