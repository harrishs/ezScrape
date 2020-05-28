import React from "react";
import { Link } from "react-router-dom";

// import logo from "../../assets/images/logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <Link to="/">
      <h1>EzScrape</h1>
    </Link>
    {/* <img src={logo} /> */}
  </div>
);

export default logo;
