import React from "react";
import DrawerList from "./DrawerList";
import styles from "./AppDrawer.module.css";
import { Divider, Drawer, IconButton } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";

const AppDrawer = ({ open, handleDrawerClose }) => {
  return (
    <Drawer
      className={styles.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: styles.drawerPaper
      }}
    >
      <div className={styles.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <DrawerList />
      <Divider />
    </Drawer>
  );
};

export default AppDrawer;
