import {
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";
import React, { Component } from "react";
export class FormPersonalDetails extends Component {
  continue = event => {
    event.preventDefault();
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
        <Container maxWidth="xs">
          <Grid>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              style={{ padding: "1rem" }}
            >
              Please fill in a password
            </Typography>
            <form>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  onChange={handleChange("password")}
                  defaultValue={values.password}
                  required
                  margin="normal"
                  fullWidth
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
                    onClick={this.continue}
                    margin="normal"
                    fullWidth
                  >
                    next
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default FormPersonalDetails;
