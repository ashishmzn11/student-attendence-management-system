import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Login from "./component/Login";
import Registration from "./component/Registration";
import Display from "./component/Addstudent/Display";
import Students from "./component/Addstudent/Students";
import { useState } from "react";
function App() {

const [childen,setchilden]=useState([]);
const onhandalechange = (itemName, itemdueDate) => {
  const newtodoitems = [
    ...childen,
    { name: itemName, duedate: itemdueDate },
  ];
  setchilden(newtodoitems);
};
  return (
    <>
    <Header/>
    <Login/>
    <Registration/>


    <Display onClickbuttion={onhandalechange}/>
    <Students stdname={childen}></Students>
    </>
  )
}

export default App
