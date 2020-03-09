import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
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
            values={this.handleChange}
          />
        );
      case 2:
        return <h1>FormPersonalDetails</h1>;
      case 3:
        return <h1>Confirm</h1>;
      case 4:
        return <h1>succes</h1>;
    }
  }
}

export default Signup;
