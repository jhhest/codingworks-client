import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
class Success extends Component {
  previous = event => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <Container maxWidth="xs">
        <Typography
          component="h1"
          variant="h5"
          align="center"
          style={{ padding: "1rem" }}
        >
          Submit and make an account.
        </Typography>
        <p>
          You almost finished your registration. Select the submit button to
          complete the registration process.
        </p>
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
        </Grid>
      </Container>
    );
  }
}

export default Success;
