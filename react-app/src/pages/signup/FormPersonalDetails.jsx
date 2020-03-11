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
              Please fill in your personal details.
            </Typography>
            <form>
              <Grid item xs={12}>
                <TextField
                  label="Date of Birth"
                  variant="outlined"
                  onChange={handleChange("dateOfBirth")}
                  defaultValue={values.dateOfBirth}
                  type="date"
                  required
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="City"
                  variant="outlined"
                  onChange={handleChange("city")}
                  defaultValue={values.city}
                  required
                  margin="normal"
                  fullWidth
                />
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
              </Grid>
            </form>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default FormPersonalDetails;
