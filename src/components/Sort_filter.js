import React, { useState } from "react";
import Display from "./Display";
// const Sort = (typeSort, listPreOrg) => {
//   // console.log("here??");
//   // console.log(typeSort);
//   // listPreOrg.sort((a, b) =>
//   //   reverse
//   //     ? a.orginize > b.orginize
//   //       ? 1
//   //       : -1
//   //     : a.orginize < b.orginize
//   //     ? 1
//   //     : -1
//   // );
//   // if (reverse) {
//   //   return listPreOrg.list.sort((a, b) => (a[orginize] < b[orginize] ? 1 : -1));
//   // }
//   // return listPreOrg.list.sort((a, b) => (a[orginize] > b[orginize] ? 1 : -1));
//   switch (typeSort) {
//     // case 0:

//     //   break;
//     case 1:
//       return listPreOrg.sort((a, b) => (a.name > b.name ? 1 : -1));
//       break;
//     case 2:
//       return listPreOrg.sort((a, b) => (a.name < b.name ? 1 : -1));
//       break;
//     case 3:
//       return listPreOrg.sort((a, b) => (a.id > b.id ? 1 : -1));
//       break;
//     case 4:
//       return listPreOrg.sort((a, b) => (a.id < b.id ? 1 : -1));
//       break;

//     default:
//       // console.log("here 2");
//       // console.log(listPreOrg);
//       return listPreOrg;
//       break;
//   }
// };
const Filtered = (listPreFilter, filterStr) => {
  let filteredList = [];
  console.log(listPreFilter);
  for (let i = 0; i < listPreFilter.length; i++) {
    console.log(listPreFilter[i]);
    if (
      listPreFilter[i].name.includes(filterStr) ||
      listPreFilter[i].id.toString().includes(filterStr) ||
      listPreFilter[i].action.includes(filterStr)
    ) {
      console.log("triggered");
      console.log(listPreFilter[i]);
      filteredList.concat(listPreFilter[i]);
    }
  }
  if (filteredList.length == 0) {
    filteredList = listPreFilter;
  }
  console.log(filteredList);
  return filteredList;
};
// const Filtered2 = (val = "") => {
//   let nameLC = val.name.toLowerCase();
//   let actionLC = val.action.toLowerCase();
//   let filterLC = filter.toLowerCase();
//   if (nameLC.includes(filterLC) || actionLC.includes(filterLC)) {
//     return true;
//   }
//   return false;
// };

const Sort_filter = (props) => {
  const Sort_filter_eval = (list) =>
    list
      .filter((val) => {
        let nameLC = val.name.toLowerCase();
        let actionLC = val.action.toLowerCase();
        let filterLC = filter.toLowerCase();
        return nameLC.includes(filterLC) || actionLC.includes(filterLC);
      })
      .sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1) * sortAZ);
  // console.log(props);
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState("id");
  const [sortAZ, setSortAZ] = useState(1);
  return (
    <>
      <div>
        <label>Filter By:</label>
        <input
          // id="filter"
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        ></input>
        <label>Sort By:</label>
        <select
          value={sortKey}
          onChange={(e) => {
            setSortKey(e.target.value);
          }}
        >
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="action">Action</option>
        </select>
        <select
          value={sortAZ}
          onChange={(e) => {
            setSortAZ(e.target.value);
          }}
        >
          <option value={1}>A-Z</option>
          <option value={-1}>Z-A</option>
        </select>

        {/* <button
          onClick={() => {
            // console.log(Sort(props.list, "name", true));
            // setSorted(Sort(props, "Name", false));
            setSorted(1);
          }}
        >
          sort alphabetical Name
        </button> */}
        {/* {console.log(sorted)} */}
        {/* <button
          onClick={() => {
            // console.log(props.list.sort((a, b) => (a.name < b.name ? 1 : -1)));
            // setSorted(props.list.sort((a, b) => (a.name < b.name ? 1 : -1)));
            setSorted(2);
          }}
        >
          sort reverse alphabetical Name
        </button> */}
        {/* {console.log(sorted)} */}
        {/* <button
          onClick={() => {
            // console.log(props.list.sort((a, b) => (a.id > b.id ? 1 : -1)));
            setSorted(3);
          }}
        >
          sort last added
        </button> */}
        {/* <button
          onClick={() => {
            // console.log(props.list.sort((a, b) => (a.id < b.id ? 1 : -1)));
            setSorted(4);
          }}
        >
          sort first added
        </button> */}
        {/* {if (sorted == "") { setSorted(props.list) }} */}
        <ul>
          {Sort_filter_eval(props.list)
            .sort(
              (a, b) =>
                (a[sortKey].toString().toLowerCase() >
                b[sortKey].toString().toLowerCase()
                  ? 1
                  : -1) * sortAZ
            )
            .map((line) => (
              <Display line={line} key={line.id}></Display>
            ))}
          {/* <Display line={line} key={line.id}></Display> */}
        </ul>
      </div>
    </>
  );
};
export default Sort_filter;
