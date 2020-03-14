import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
export class FormPersonalDetails extends Component {
  continue = event => {
    event.preventDefault();
    console.log("this.props", this.props);

    this.props.nextStep();
  };
  previous = event => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <Grid>
          <Typography
            component="h1"
            variant="h5"
            align="center"
            style={{ padding: "1rem" }}
          >
            Password creation.
          </Typography>
          <p>
            Please fill in a password. Keep it safe! You will be needing it when
            you want to login!.
          </p>
          <form onSubmit={this.continue}>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="outlined"
                onChange={handleChange("password")}
                defaultValue={values.password}
                required
                margin="normal"
                fullWidth
                type="password"
              />
            </Grid>
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
                  margin="normal"
                  fullWidth
                  type="submit"
                >
                  next
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </div>
    );
  }
}

export default FormPersonalDetails;
