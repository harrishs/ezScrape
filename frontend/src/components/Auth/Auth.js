import React from "react";

const auth = (props) => {
  return (
    <div>
      <h1>{props.type}</h1>
      <form action={props.url} method={props.method}>
        <label>Email:</label>
        <input type="email" name="email" placeholder="Email@email.com" />
        <label>Password:</label>
        <input type="password" name="password" />
        <button type="submit">{props.type}</button>
      </form>
    </div>
  );
};

export default auth;
