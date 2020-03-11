import { Container, Paper } from "@material-ui/core";
import React, { Component } from "react";
import Confirm from "./Confirm";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Password from "./Password";
import Succes from "./Sucess";
export class Signup extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    telephoneNumber: "",
    email: "",
    dateOfBirth: "",
    city: "",
    password: ""
  };

  // Proceed to next Step.
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to previous step.
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
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
      password
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
    switch (step) {
      case 1:
        return (
          <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: "2rem", margin: "1rem" }}>
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
            <Paper elevation={3} style={{ padding: "2rem", margin: "1rem" }}>
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
            <Paper
              elevation={3}
              style={{ padding: "1rem 0rem 3rem 0rem", margin: "1rem" }}
            >
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
            <Paper elevation={3} style={{ padding: "2rem", margin: "1rem" }}>
              <Confirm
                values={values}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
              />
            </Paper>
          </Container>
        );
      case 5:
        return (
          <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: "2rem", margin: "1rem" }}>
              <Succes
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

export default Signup;
