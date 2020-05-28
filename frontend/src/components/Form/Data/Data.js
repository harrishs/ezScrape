import React, { useState } from "react";
import axios from "axios";

const Data = (props) => {
  const [url, setUrl] = useState("");
  const [selector, setSelector] = useState("");

  const param = props.match.params.id;
  if (param) {
    axios
      .get(`http://localhost:3030/api/${param}`)
      .then((res) => {
        setUrl(res.data.url);
        setSelector(res.data.selector);
      })
      .catch((err) => {
        throw err;
      });
  }

  let urlVal;
  let selectorVal;
  if (url !== "") {
    urlVal = url;
  }
  if (selector !== "") {
    selectorVal = selector;
  }

  return (
    <div className="holder">
      <form action="http://localhost:3030/api" method="POST">
        <div>
          <label>Url: </label>
          <input
            type="text"
            name="url"
            defaultValue={urlVal}
            //onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Selector: </label>
          <input
            type="text"
            name="selector"
            defaultValue={selectorVal}
            //onChange={(e) => setSelector(e.target.value)}
          />
        </div>
        <button className="hold" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Data;
