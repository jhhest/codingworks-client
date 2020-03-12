import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

const DrawerListItem = ({ link, icon: Icon, pageName }) => {
  return (
    <Link to={link} style={{ textDecoration: "none", color: "midnightblue" }}>
      <ListItem button>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={pageName} />
      </ListItem>
    </Link>
  );
};

export default DrawerListItem;
