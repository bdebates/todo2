import React, { useState } from "react";
import Sort_filter from "./Sort_filter";

const Main_info = () => {
  const [list, setList] = useState([
    { id: 1, name: "Hortense", action: "Study Spanish" },
    { id: 2, name: "Oslo", action: "Storm the Castle" },
    { id: 3, name: "Xavier", action: "Eat dinner" },
    { id: 4, name: "Reginald", action: "Take a walk" },
    { id: 5, name: "Abigail", action: "Go to work" },
    { id: 6, name: "Mary", action: "Dance" },
  ]);
  const [name, setName] = useState("");
  const [action, setAction] = useState("");
  const [newId, setNewId] = useState();
  return (
    <div>
      <label htmlFor="name">Please enter name:</label>
      <input id="name" type="text" onChange={(e) => setName(e.target.value)} />
      <label htmlFor="action">Please enter action:</label>
      <input
        id="action"
        type="text"
        onChange={(e) => setAction(e.target.value)}
      />
      <button
        onClick={() => {
          setList(
            (val) =>
              // {
              //   console.log(val);
              //   let test =
              list.concat({
                id: list[list.length - 1].id + 1,
                name: name,
                action: action,
              })
            //;   console.log(test);
            //   return test;
            // }
          );
        }}
      >
        Add to list
      </button>
      <Sort_filter list={list}></Sort_filter>
    </div>
  );
};
export default Main_info;
