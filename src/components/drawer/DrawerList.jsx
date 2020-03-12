import { List } from "@material-ui/core";

import {
  AccountCircle as AccountCircleIcon,
  AssignmentInd as AssignmentIndIcon,
  Business as BusinessIcon,
  Home as HomeIcon
} from "@material-ui/icons";
import React from "react";
import DrawerListItem from "./DrawerListItem";

const DrawerList = () => {
  return (
    <List>
      <DrawerListItem pageName="Home" icon={HomeIcon} link="/" />
      <DrawerListItem pageName="Login" icon={AccountCircleIcon} link="/login" />
      <DrawerListItem
        pageName="Signup"
        icon={AssignmentIndIcon}
        link="/signup"
      />
      <DrawerListItem
        pageName="Companies"
        icon={BusinessIcon}
        link="/companies"
      />
    </List>
  );
};

export default DrawerList;
