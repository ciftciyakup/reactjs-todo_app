import React from "react";

// Bootstrap Classes
const listGroupClass = "list-group mb-2";
const listClass = "list-group-item list-group-item-action";
const checkboxClass = "form-check-input me-1";
const lineThroughClass = "text-decoration-line-through";

function List(props) {
  return (
    <div className={listGroupClass}>
      {props.list.map((item, index) => (
        <button
          onClick={() => props.handleClick(item.id)}
          className={listClass}
          key={index}
        >
          <input
            className={checkboxClass}
            checked={item.completed}
            onChange={() => props.handleClick(item.id)}
            type="checkbox"
          />
          <label className={item.completed ? lineThroughClass : ""}>
            {item.name}
          </label>
        </button>
      ))}
    </div>
  );
}

export default List;
