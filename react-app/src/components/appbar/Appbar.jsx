import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import styles from "./Appbar.module.css";

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
          Coding Works
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
