import Student from "./Student";

function Students({stdname}){
return(
  <div className="item-contener">
  {
    stdname.map((item)=><Student  todoName={item.name} duedate={item.duedate}/>)
  }
  </div>
)
}
export default Students;
