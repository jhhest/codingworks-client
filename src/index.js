import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/store";

const theme = createMuiTheme({
  spacing: 8
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Fragment>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
