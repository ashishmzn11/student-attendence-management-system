import { Link } from "react-router-dom";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import StDropdown from "../component/StDropdwon";
import React, { useState } from "react";
import StDropdown2 from "../component/StDropdwon2";
import StDropdown3 from "../component/StDropdwon3";
// import style from "./Registion.module.css";
function Student() {

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className=" row">
            {/* <div>
              <h4 className=" row justify-content-center mb-5">Faclty Registration</h4>
            </div><div  className=" row justify-content-center mb-5"><button className="btn btn-primary">Check<MdOutlineLibraryBooks /></button></div> */}
            <div className="card-header d-flex justify-content-between align-items-center mb-5">
              <h4 className="mr-5">
                Welcome Registration
              </h4>
              <button className="btn btn-primary">
              Logout
              <AiOutlineLogout />
              </button>
            </div>
            <div className="card shadow-sm">
              <div className="card-header d-flex justify-content-between align-items-center ">
                <h4>Add New Student</h4>
                <button className="btn btn-primary">
                 Check record
                  <MdOutlineLibraryBooks />
                </button>
              </div>
              <div className="card-body">
                {/* <form onSubmit={handleSubmit}> */}
                <div className="container mt-3">
                  <form>
                    <div className="row mb-3">
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          id="user name"
                          placeholder="Student Name"
                        />
                      </div>
                      <div className="col-md-3">
                        <input
                          type="number"
                          className="form-control"
                          id="input2"
                          placeholder="Student Roll no"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-4">
                        <StDropdown/>
                      </div>
                      <div className="col-md-4">
                      <StDropdown2/>
                      </div>
                      <div className="col-md-4">
                        <StDropdown3/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="row d-flex justify-content-center  text-center">
                        <button type="submit" className="btn col-md-4 app-bgcolor"onClick={alert("Your Student sucessful add")}>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Student;
