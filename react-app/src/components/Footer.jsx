import React, { Component } from "react";
import { Typography, Link, Container, Grid } from "@material-ui/core";

export class Footer extends Component {
  render() {
    return (
      <Container maxWidth="xs">
        <Grid container spacing={5}>
          <Grid item>
            <Typography
              align="center"
              variant="body2"
              color="textSecondary"
              align="center"
            >
              {"Copyright © "}
              <Link color="inherit" href="#">
                Coding Works
              </Link>
              {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Footer;
