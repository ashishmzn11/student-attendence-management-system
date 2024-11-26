import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header";
// import Login from "./Login";
// import Registration from "./Registration";
// import Display from "../component/Display";
// import Students from "../component/Students";
import { Outlet } from "react-router-dom";
// import Login from "./Login.jsx";
// import { useState } from "react";
function App() {

  return (
    <>
    <Header/>
   <Outlet/>
  </>
  )
}
export default App
