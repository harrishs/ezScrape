import React from "react";

import Logo from "../../UI/Logo/Logo";
import NavItems from "../../Nav/NavItems/NavItems";
import classes from "./Side.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const side = (props) => {
  let attachedClasses = [classes.Side, classes.Close];
  if (props.open) {
    attachedClasses = [classes.Side, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.close} />
      <div className={attachedClasses.join(" ")}>
        <Logo />
        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  );
};

export default side;
