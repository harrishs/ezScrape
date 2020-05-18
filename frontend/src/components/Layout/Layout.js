import React, { useState } from "react";

import Aux from "../../hoc/Aux";
import Toolbar from "../Nav/Toolbar/Toolbar";
import Landing from "../UI/Landing/Landing";
import classes from "./Layout.module.css";
import Side from "../Nav/Side/Side";

const Layout = (props) => {
  const [showSide, setShowSide] = useState(false);

  const sideDrawerClose = () => {
    setShowSide(false);
  };

  const toggleClick = () => {
    setShowSide(!showSide);
  };

  return (
    <Aux>
      <Toolbar toggleClick={toggleClick} />
      <Side close={sideDrawerClose} open={showSide} />
      <main>
        <div className={classes.Layout}>
          <Landing />
        </div>
      </main>
    </Aux>
  );
};

export default Layout;
