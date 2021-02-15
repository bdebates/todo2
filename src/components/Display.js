import React, { useState } from "react";
const Display = (props) => {
  // console.log(props);
  return (
    <li>
      ID: {props.line.id} Name: {props.line.name} Action: {props.line.action}
      <button onClick={(e) => {}}>🗑️</button>
    </li>
  );
};
export default Display;
