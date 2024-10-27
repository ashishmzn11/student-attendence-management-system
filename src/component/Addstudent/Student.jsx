import React from 'react';
function Student({todoName,duedate}){
return(
  <div className="container  as-contener">
  <div className="row mb-3">
       <div className="col-6">{todoName}</div>
       <div className="col-4">{duedate}</div>
       
       <div className="col-2"><button type="button" class="btn btn-danger as-botton" >Delete</button></div>
     </div>
     </div>
);
}
export default Student;