import React from "react";

import classes from "./Toggle.module.css";

const toggle = (props) => (
  <div onClick={props.clicked} className={classes.Toggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default toggle;
