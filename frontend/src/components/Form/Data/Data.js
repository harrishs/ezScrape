import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const Data = (props) => {
  const [url, setUrl] = useState("");
  const [selector, setSelector] = useState("");

  let onSubHandler;
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

    onSubHandler = (url, selector) => {
      const entry = { url: url, selector: selector };
      axios
        .post(`http://localhost:3030/api/edit/${param}`, entry)
        .then((res) => {
          console.log(res);
          props.history.push("/");
        })
        .catch((err) => {
          throw err;
        });
    };
  } else {
    onSubHandler = (url, selector) => {
      const entry = { url: url, selector: selector };
      axios
        .post("http://localhost:3030/api", entry)
        .then((res) => {
          console.log(res);
          props.history.push("/");
        })
        .catch((err) => {
          throw err;
        });
    };
  }

  const onDeleteHandler = () => {
    axios
      .post(`http://localhost:3030/api/edit/${param}`)
      .then((res) => {
        console.log(res);
        props.history.push("/");
      })
      .catch((err) => {
        throw err;
      });
  };

  let urlVal;
  let selectorVal;
  if (url !== "") {
    urlVal = url;
  }
  if (selector !== "") {
    selectorVal = selector;
  }

  const urlHandler = (e) => {
    setUrl(e.target.value);
  };

  const selectorHandler = (e) => {
    setSelector(e.target.value);
  };

  return (
    <div className="holder">
      <form>
        <div>
          <label>Url: </label>
          <input
            type="text"
            name="url"
            defaultValue={urlVal}
            onChange={urlHandler}
          />
        </div>
        <div>
          <label>Selector: </label>
          <input
            type="text"
            name="selector"
            defaultValue={selectorVal}
            onChange={selectorHandler}
          />
        </div>
        <button onClick={onSubHandler}>Submit</button>
        <button onClick={onDeleteHandler}>Delete</button>
      </form>
    </div>
  );
};

export default withRouter(Data);
