import React, { Component } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  List,
  ListItem,
  Typography
} from "@material-ui/core";
export class Confirm extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };
  previous = event => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
    console.log("values:", values);

    return (
      <Container maxWidth="xs">
        <Typography
          component="h1"
          variant="h5"
          align="center"
          style={{ padding: "1rem" }}
        >
          We received the following Data
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
          <List></List>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              // style={styles.button}
              onClick={this.continue}
              margin="normal"
              fullWidth
            >
              next
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Confirm;
