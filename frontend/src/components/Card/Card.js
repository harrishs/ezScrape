import React from "react";

const card = (props) => {
  return (
    <div className="card">
      <div className="logo">
        <img src={props.imageUrl} alt={props.name + " display"} />
      </div>
      <div className="description">
        <h1>{props.name}</h1>
        <h4>Categories: {props.type.map((t) => t + ", ")}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default card;
