import React from "react";

const Add = (props) => {
  return (
    <div className="holder">
      <form action={`http://localhost:3030/api/add`} method="POST">
        <div>
          <label>Url: </label>
          <input type="text" name="url" />
        </div>
        <div>
          <label>Selector: </label>
          <input type="text" name="selector" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
