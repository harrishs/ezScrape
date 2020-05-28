import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import classes from "./Card.module.css";

const Card = (props) => {
  const param = props.match.params.id;
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3030/api/${param}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        throw err;
      });
  }, [param]);
  const scraped = data.data;
  return (
    <div className={classes.Card}>
      {scraped}
      <Link to={`/url/edit/${param}`}>Edit</Link>
    </div>
  );
};

export default Card;
