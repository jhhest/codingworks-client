import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../../store/auth/actions";
import { connect } from "react-redux";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = event => {
    console.log("handle submit is bein called.");
    event.preventDefault();
    const { email, password } = this.state;
    console.log("How does login look like? ", login);
    this.props.login(email, password);
  };

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
          <form onSubmit={this.handleLogin}>
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
              onChange={this.handleChangeInput}
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
              onChange={this.handleChangeInput}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
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
// const mapStateToProps = state => ({ login: login });

export default connect(() => ({}), { login })(Login);
