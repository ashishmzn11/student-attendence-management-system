import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function StDropdown3() {
  const [Branch, setBranch] = useState("");
  const Branchs = ["Mechanical", "Electrical", "Civil","CSE"];
  const BranchSelect = (option) => {
    const newitem=Branch(option);
    setBranch(newitem);
  };
  return (
    <div className="dropdown w-100">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Branch"
          value={Branch}
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
