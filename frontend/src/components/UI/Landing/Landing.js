import React from "react";

import classes from "./Landing.module.css";

const landing = (props) => {
  return (
    <div className={classes.Landing}>
      <div>
        Cuisini a social dining app. Discover restaurants, make friends and
        share your love of food.
      </div>
      <button>Restaurant login</button>
    </div>
  );
};

export default landing;
