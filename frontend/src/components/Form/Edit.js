import React, { useState } from "react";
import axios from "axios";

const Edit = (props) => {
  const [url, setUrl] = useState("");
  const [selector, setSelector] = useState("");

  const param = props.match.params.id;
  axios
    .get(`http://localhost:3030/api/${param}`)
    .then((res) => {
      setUrl(res.data.url);
      setSelector(res.data.selector);
    })
    .catch((err) => {
      throw err;
    });

  const urlVal = url;
  const selectorVal = selector;

  return (
    <div className="holder">
      <form action={`http://localhost:3030/api/edit/${param}`} method="POST">
        <div>
          <label>Url: </label>
          <input type="text" name="url" defaultValue={urlVal} />
        </div>
        <div>
          <label>Selector: </label>
          <input type="text" name="selector" defaultValue={selectorVal} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <form action={`http://localhost:3030/api/delete/${param}`} method="POST">
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Edit;
