import { useState } from "react";

function Display(){

  

  return(
    <div className="container as-contener">
    <div className="row mb-3">
      <div className="col-4 col-sm-4 col-lg-4">
        <input type="text" placeholder="Enter Name" />
      </div>
      <div className="col-2">
      <input type="date"  />
      </div>
      <div className="col-2">
      <input type="text" />
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-success as-botton" >Add</button>
      </div>
    </div>
  </div>
  )
}
export default Display;