import React from "react";

const data = (props) => {
  return (
    <div className="holder">
      <form action={props.url} method="POST">
        <input type="text" name="name" placeholder="Name" />
        <input
          type="text"
          name="type"
          placeholder="Use commas to seperate types"
        />
        <input type="text" name="description" placeholder="Description" />
        <input type="text" name="imageUrl" placeholder="Image Url" />
        <button className="hold" type="submit">
          Placeholder
        </button>
        <input type="hidden" name="id" value={props.id} />
      </form>
    </div>
  );
};

export default data;
