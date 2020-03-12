import { Container, StylesProvider } from "@material-ui/core";
import clsx from "clsx";
import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import styles from "./App.module.css";
import Appbar from "./components/appbar/Appbar";
import AppDrawer from "./components/drawer/AppDrawer";
import Footer from "./components/Footer";
import Login from "./pages/loginPage/Login";
import Signup from "./pages/signup/Signup";
import Welcome from "./pages/Welcome";

export class App extends Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
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
              </Switch>
              <Footer />
            </Container>
          </main>
        </StylesProvider>
      </Fragment>
    );
  }
}

export default App;
