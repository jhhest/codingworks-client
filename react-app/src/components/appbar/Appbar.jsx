import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import styles from "./Appbar.module.css";
import { DeveloperMode as LogoIcon } from "@material-ui/icons";

import { Menu as MenuIcon } from "@material-ui/icons";

const Appbar = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar
      className={clsx(styles.appBar, {
        [styles.appBarShift]: open
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(styles.menuButton, open && styles.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" noWrap>
          <LogoIcon /> Coding Works
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
