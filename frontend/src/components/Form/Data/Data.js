import React, { useState } from "react";

const Data = (props) => {
  // const [url, setUrl] = useState("");
  // const [selector, setSelector] = useState("");
  http: return (
    <div className="holder">
      <form action="http://localhost:3030/api" method="POST">
        <input
          type="text"
          name="url"
          placeholder="url"
          //onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          name="selector"
          placeholder="Enter selector based on instructions"
          //onChange={(e) => setSelector(e.target.value)}
        />
        <button className="hold" type="submit">
          Placeholder
        </button>
      </form>
    </div>
  );
};

export default Data;
