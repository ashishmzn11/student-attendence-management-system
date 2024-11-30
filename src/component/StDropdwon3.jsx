// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useContext, useRef } from "react";
function StDropdown3() {
  const greadElement=useRef(["Mechanical", "Electrical", "Civil","CSE"]);
  const reactions=greadElement.current.value;
  greadElement.current.value="";

const Branchs = ["Mechanical", "Electrical", "Civil","CSE"];
  const BranchSelect = (option) => {
    const newitem=greadElement(option);
    reactions(newitem);
  };
 
  return (
    <div className="dropdown w-100">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Branch"
          // value={greadElement}
          readOnly
        />
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul className="dropdown-menu dropdown-menu-end">
          {Branchs.map((option, index) => (
            <li key={index}>
              <button
                className="dropdown-item"
                onClick={() =>BranchSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default StDropdown3
