import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = (props) => {
  const param = props.match.params.id;
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3030/api/${param}`)
      .then((data) => setData(data.data))
      .catch((err) => {
        throw err;
      });
  }, [param]);
  const scraped = JSON.stringify(data.data);
  return (
    <div className="card" style={{ marginTop: "200px" }}>
      <p>{scraped}</p>
    </div>
  );
};

export default Card;
