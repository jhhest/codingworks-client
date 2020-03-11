import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import { Paper } from "@material-ui/core";
import Confirm from "./Confirm";
import Succes from "./Sucess";
import Password from "./Password";
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
          <Paper
            elevation={3}
            style={{ padding: "1rem 0rem 3rem 0rem", margin: "1rem" }}
          >
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </Paper>
        );
      case 2:
        return (
          <Paper
            elevation={3}
            style={{ padding: "1rem 0rem 3rem 0rem", margin: "1rem" }}
          >
            <FormPersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </Paper>
        );
      case 3:
        return (
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
        );
      case 4:
        return (
          <Paper
            elevation={3}
            style={{ padding: "1rem 0rem 3rem 0rem", margin: "1rem" }}
          >
            <Confirm
              values={values}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />
          </Paper>
        );
      case 5:
        return (
          <Paper
            elevation={3}
            style={{ padding: "1rem 0rem 3rem 0rem", margin: "1rem" }}
          >
            <Succes
              values={values}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />
          </Paper>
        );
      default:
        return (
          <p>Oops. something went wrong. Please Contact your adminstrator.</p>
        );
    }
  }
}

export default Signup;
