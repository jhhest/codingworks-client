import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Welcome from "./pages/Welcome";

import clsx from "clsx";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  StylesProvider,
  Container
} from "@material-ui/core";

import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Inbox as InboxIcon,
  Mail as MailIcon
} from "@material-ui/icons";

import styles from "./App.module.css";

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
          <AppBar
            // className={clsx(styles.appBar, {
            //   [styles.appBarShift]: open
            // })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                edge="start"
                // className={clsx(styles.menuButton, open && styles.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Coders Network
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={styles.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            // classes={{
            //   paper: styles.drawerPaper
            // }}
          >
            <div>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
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
