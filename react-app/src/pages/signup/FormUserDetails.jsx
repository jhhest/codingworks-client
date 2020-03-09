import React, { Component } from "react";


export class FormUserDetails extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values } = this.props;
    return (
        <div>
            <h1> Hellow</h1>
        </div>
    );
  }
}

export default FormUserDetails;
