import React, { useEffect, useState } from "react";
import classes from "./Landing.module.css";
import axios from "axios";

const Landing = (props) => {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3030/api")
      .then((res) => setEntries(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  let output;

  if (entries !== null) {
    output = entries.map((e) => {
      return (
        <div key={e._id}>
          <h1>{e.url}</h1>
          <h1>{e.selector}</h1>
          <h1>{e._id}</h1>
        </div>
      );
    });
  }

  return (
    <div className={classes.Landing}>
      <div>
        <h1>{output}</h1>
      </div>
    </div>
  );
};

export default Landing;
