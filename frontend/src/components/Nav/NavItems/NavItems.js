import React from "react";

import classes from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

const navItems = () => (
  <ul className={classes.NavItems}>
    <NavItem link="/input">Add Entries</NavItem>
  </ul>
);

export default navItems;
