import {
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";
import React, { Component, Fragment } from "react";
export class FormUserDetails extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <Container maxWidth="xs">
          <Grid>
            <Typography component="h1" variant="h5" align="center" style={{margin: "1rem 0rem"}}>
              Please fill in your contact details
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs>
                  <TextField
                    label="First name"
                    variant="outlined"
                    onChange={handleChange("firstName")}
                    defaultValue={values.firstName}
                    required
                    autoComplete="fname"
                  />
                </Grid>
                <Grid item xs>
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
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Telephone number"
                    variant="outlined"
                    type="number"
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
                    onClick={this.continue}
                    fullWidth
                  >
                    continue
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

// const styles = {
//   button: {
//     margin: 15
//   }
// };

export default FormUserDetails;
