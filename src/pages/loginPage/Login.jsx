import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Paper
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Login extends Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Avatar style={{ margin: "0 auto" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Sign in
          </Typography>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link to="/signup">
                  <p>Don't have an account? Sign Up</p>
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    );
  }
}

export default Login;
