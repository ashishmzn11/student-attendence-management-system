import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

 function StDropdown() {
  const [CourseOption, setCourseOption] = useState("");
   const options = ["Diploma", "Bechelor", "B.E", "M.Tech"];
  // const [selectedOption, setSelectedOption] = useState("");
  // const options = ["Diploma", "Bechelor","B.E", "M.Tech"];
  // const semesterSelect = (option) => {
  //   setsemesters(option);
  // };
  const courseSelect = (option) => {
    setCourseOption(option);
  };

  return (
    <>
      <div className="dropdown w-100">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Course"
            value={CourseOption}
            readOnly
          />
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul className="dropdown-menu dropdown-menu-end">
            {options.map((option, index) => (
              <li key={index}>
                <button
                  className="dropdown-item"
                  onClick={() => courseSelect(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="dropdown w-100">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Course"
          value={selectedOption}
          readOnly
        />
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul className="dropdown-menu dropdown-menu-end">
          {options.map((option, index) => (
            <li key={index}>
              <button
                className="dropdown-item"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div> */}
    </>
  );
}
export default StDropdown;

