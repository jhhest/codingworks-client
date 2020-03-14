import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const continueNext = event => {
    event.preventDefault();
    nextStep();
  };
  const previous = event => {
    event.preventDefault();
    prevStep();
  };
  return (
    <Fragment>
      <Grid>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          style={{ paddingBottom: "1rem" }}
        >
          Please fill in your personal details.
        </Typography>
        <form onSubmit={continueNext}>
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
                  onClick={previous}
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
                  type="submit"
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
    </Fragment>
  );
};

export default FormPersonalDetails;
