import { Container, StylesProvider } from "@material-ui/core";
import clsx from "clsx";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Appbar from "./components/appbar/Appbar";
import AppDrawer from "./components/drawer/AppDrawer";
import Footer from "./components/Footer";
import Login from "./pages/loginPage/Login";
import Signup from "./pages/signup/Signup";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
export class App extends Component {
  state = {
    open: false
  };

  protectedRoutes = (Component, routerProps) => {
    const { jwt } = this.props;
    return jwt ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    console.log("value of this.props in app.js", this.props)
    const { open } = this.state;
    return (
      <Fragment>
        <StylesProvider injectFirst>
          <Appbar handleDrawerOpen={this.handleDrawerOpen} open={open} />
          <AppDrawer open={open} handleDrawerClose={this.handleDrawerClose} />
          <main
            className={clsx(styles.content, {
              [styles.contentShift]: open
            })}
          >
            <div className={styles.drawerHeader} />
            <Container fixed>
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route
                  path="/profile"
                  render={routerProps =>
                    this.protectedRoutes(Profile, routerProps)
                  }
                />
              </Switch>
              <Footer />
            </Container>
          </main>
        </StylesProvider>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ jwt: state.login.Authorization });

export default connect(mapStateToProps)(App);

// Authorization
