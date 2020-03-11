import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
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
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <Confirm />;
      case 4:
        return <h1>succes</h1>;
    }
  }
}

export default Signup;
