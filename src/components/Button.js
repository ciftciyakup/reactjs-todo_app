import React from "react";

function Button(props) {
  return (
    <button className={props.className} onClick={(e) => props.handleClick(e)}>
      {props.children}
    </button>
  );
}

export default Button;
