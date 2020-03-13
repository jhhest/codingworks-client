import { List } from "@material-ui/core";

import {
  AccountCircle as AccountCircleIcon,
  AssignmentInd as AssignmentIndIcon,
  Business as BusinessIcon,
  Home as HomeIcon, 
  ExitToApp as LoginIcon,
} from "@material-ui/icons";
import React from "react";
import DrawerListItem from "./DrawerListItem";

const DrawerList = () => {
  return (
    <List>
      <DrawerListItem pageName="Home" icon={HomeIcon} link="/" />
      <DrawerListItem pageName="Login" icon={LoginIcon} link="/login" />
      <DrawerListItem pageName="Profile" icon={AccountCircleIcon} link="/profile" />
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
