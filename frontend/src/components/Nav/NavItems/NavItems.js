import React from "react";

import classes from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

const navItems = () => (
  <ul className={classes.NavItems}>
    <NavItem link="/login">Login</NavItem>
    <NavItem link="/signup">Sign Up</NavItem>
  </ul>
);

export default navItems;
