import React from "react";

const auth = (props) => {
  return (
    <div>
      <h1>{props.type}</h1>
      <form action={props.url} method={props.method}>
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="Email@email.com" />
        <label for="password">Password:</label>
        <input type="password" name="password" />
        <a href={props.url}>
          <button className="hold">{props.type}</button>
        </a>
      </form>
    </div>
  );
};

export default auth;
