import React from "react";

// Bootstrap Classes
const inputClass = "form-control mb-2 me-1";

function ToDoInput(props) {
  return (
    <input
      className={inputClass}
      value={props.value}
      onChange={(e) => {
        props.handleChange(e.target.value);
      }}
      type="text"
      placeholder="Yapılacak yazın"
    />
  );
}

export default ToDoInput;
