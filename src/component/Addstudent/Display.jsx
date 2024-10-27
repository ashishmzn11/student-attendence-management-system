import { useState } from "react";

function Display({onClickbuttion}){

  const [todoName,settodoName]=useState();
  const [dueDate,setdueDate]=useState();
  const onChangename=(event)=>{
    settodoName(event.target.value);
  }
  const onChangeRoll=(event)=>{
    setdueDate(event.target.value);
  }
  const handaleButtonclicked=()=>{
    onClickbuttion(todoName,dueDate);
    setdueDate("");
    settodoName("");

  }
  return(
    <div className="container as-contener">
    <div className="row mb-3">
      <div className="col-6 col-sm-6 col-lg-6">
        <input type="text" placeholder="Enter Name" value={todoName} onChange={onChangename} />
      </div>
      <div className="col-4">
      <input type="date" value={dueDate}  onChange={onChangeRoll} />
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-success as-botton" onClick={handaleButtonclicked}>Add</button>
      </div>
    </div>
  </div>
  )
}
export default Display;