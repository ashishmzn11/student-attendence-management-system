import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function StDropdown2() {
  const [semester, setsemesters] = useState("");
  const semesters = ["semester1", "semester2", "semester3", "semester4","semester5","semester6","semester7","semester8"];
  const semesterSelect = (option) => {
    setsemesters(option);
  };
  return (
    <div className="dropdown w-100">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="semester"
          value={semester}
          readOnly
        />
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul className="dropdown-menu dropdown-menu-end">
          {semesters.map((option, index) => (
            <li key={index}>
              <button
                className="dropdown-item"
                onClick={() => semesterSelect(option)}
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
export default StDropdown2
