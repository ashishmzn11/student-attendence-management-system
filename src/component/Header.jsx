import style from "./Header.module.css";
function Header(){
  return(
    <header class={`py-3 mb-3 border-bottom d-flex justify-content-center app-bgcolor py-3 ${style.head}`}>
      <div class={`d-flex align-items-center ${style.ceter}`}>
        <h1 >Attendence Management System</h1>
      </div>
  </header>
  )
}
export default Header;