import { Container, Paper } from "@material-ui/core";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "../../axiosInstance";
import Confirm from "./Confirm";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Password from "./Password";
import Success from "./Success";

export class Signup extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    telephoneNumber: "",
    email: "",
    dateOfBirth: "",
    city: "",
    password: "",
    toLogin: false
  };

  // Proceed to next Step of signup process
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to previous step of signup process
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // http POST localhost:5000/user/new firstName="Jan" lastName="van Hest" telephoneNumber=0642091421 email="janvanhest@outlook.com" dateOfBirth="1984-02-15" city="Groesbeek" password="password"
  createAccount = event => {
    const {
      firstName,
      lastName,
      telephoneNumber,
      email,
      dateOfBirth,
      city,
      password
    } = this.state;
    Axios.post("/user/new", {
      firstName,
      lastName,
      telephoneNumber,
      email,
      dateOfBirth,
      city,
      password
    }).then(() => this.setState(() => ({ toLogin: true })));
  };

  // Handle field changes.
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      telephoneNumber,
      email,
      dateOfBirth,
      city,
      password,
      toLogin
    } = this.state;
    const values = {
      firstName,
      lastName,
      telephoneNumber,
      email,
      dateOfBirth,
      city,
      password
    };
    if (toLogin === true) {
      return <Redirect to="/login" />;
    }

    switch (step) {
      case 1:
        return (
          <Container maxWidth="xs">
            <Paper elevation={3} style={paperStyle}>
              <FormUserDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </Paper>
          </Container>
        );
      case 2:
        return (
          <Container maxWidth="sm">
            <Paper elevation={3} style={paperStyle}>
              <FormPersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </Paper>
          </Container>
        );
      case 3:
        return (
          <Container maxWidth="sm">
            <Paper elevation={3} style={paperStyle}>
              <Password
                values={values}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
              />
            </Paper>
          </Container>
        );
      case 4:
        return (
          <Container maxWidth="sm">
            <Paper elevation={3} style={paperStyle}>
              <Confirm
                values={values}
                createAccount={this.createAccount}
                prevStep={this.prevStep}
              />
            </Paper>
          </Container>
        );
      case 5:
        return (
          <Container maxWidth="sm">
            <Paper elevation={3} style={paperStyle}>
              <Success
                values={values}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
              />
            </Paper>
          </Container>
        );
      default:
        return (
          <p>Oops. something went wrong. Please Contact your adminstrator.</p>
        );
    }
  }
}

const paperStyle = { padding: "2rem", margin: "1rem" };
export default Signup;
