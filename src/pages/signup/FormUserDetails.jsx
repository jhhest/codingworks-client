import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

const FormUserDetails = ({nextStep, handleChange, values}) => {
  const nextItem = e => {
    e.preventDefault();
    nextStep();
  };
    return (
      <Fragment>
        <Grid>
          <Typography
            component="h1"
            variant="h5"
            align="center"
            style={{ paddingBottom: "2rem" }}
          >
            Please fill in your contact details
          </Typography>
          <form onSubmit={nextItem}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First name"
                  variant="outlined"
                  onChange={handleChange("firstName")}
                  defaultValue={values.firstName}
                  required
                  autoComplete="fname"
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last name"
                  variant="outlined"
                  onChange={handleChange("lastName")}
                  defaultValue={values.lastName}
                  required
                  fullWidth
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your email"
                  variant="outlined"
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                  required
                  fullWidth
                  type="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Telephone number"
                  variant="outlined"
                  type="tel"
                  onChange={handleChange("telephoneNumber")}
                  defaultValue={values.telephoneNumber}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <p>Items marked with a * are required.</p>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  // style={styles.button}
                  fullWidth
                  type="submit"
                >
                  continue
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Fragment>
    );
}

// const styles = {
//   button: {
//     margin: 15
//   }
// };

export default FormUserDetails;
