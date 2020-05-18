import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../../UI/Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Toggle from "../Side/Toggle/Toggle";

const navBar = (props) => {
  return (
    <header className={classes.navBar}>
      <Toggle clicked={props.toggleClick} />
      <Logo />
      <nav className={classes.DeskTopOnly}>
        <NavItems />
      </nav>
    </header>
  );
};

export default navBar;
