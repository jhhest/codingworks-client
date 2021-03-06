import { Button, Grid, List, ListItem, Typography } from "@material-ui/core";
import React, { Component, Fragment } from "react";
export class Confirm extends Component {
  createAccount = event => {
    event.preventDefault();
    this.props.createAccount();
  };
  previous = event => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
    console.log("values:", values);

    return (
      <Fragment>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          style={{ padding: "1rem" }}
        >
          Account Creation
        </Typography>
        <p>Please check if we received the correct information.</p>
        <List>
          <ListItem>Firstname: {values.firstName}</ListItem>
          <ListItem>Lastname: {values.lastName}</ListItem>
          <ListItem>Telephonenumber: {values.telephoneNumber} </ListItem>
          <ListItem>Email: {values.email}</ListItem>
          <ListItem>Date of birth: {values.dateOfBirth}</ListItem>
          <ListItem>City: {values.city}</ListItem>
        </List>
        <Grid container style={{ marginTop: "2rem" }} spacing={4}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              // style={styles.button}
              onClick={this.previous}
              margin="normal"
              fullWidth
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              // style={styles.button}
              onClick={this.createAccount}
              margin="normal"
              fullWidth
            >
              Create Account
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Confirm;
