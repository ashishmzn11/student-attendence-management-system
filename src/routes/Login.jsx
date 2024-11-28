import { Link } from "react-router-dom";
import style from "../css/Login.module.css";
import { IoIosContact } from "react-icons/io";
function Login() {
  return (
    <div class={`row ${style.ro}`}>
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <div class={`card-body  ${style.wt}`}>
            <img src="./img/1.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class={`card-body  ${style.wt}`}>
            <div class={`${style.icon}`}>
              <IoIosContact class="app-bgcolor"></IoIosContact>
            </div>
          
            <div class={`input-group input-group-lg ${style.input}`}>
           
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>

            <div class={`input-group input-group-lg ${style.input1}`}>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>

            <div class={`input-group input-group-lg  ${style.input1}`}>
              <Link to="/Student"
                class="form-control btn app-bgcolor"
              >Login</Link>
              
            </div>
            <div class={`input-group input-group-lg  ${style.input1}`}>
             <p > Forget Password? <Link to="/ForgotPassword">Click here</Link></p>
            </div>
            <div class={`input-group input-group-lg  ${style.input1}`}>
             <h1 class={`${style.renew}`}> New registration?<Link  to="/Registration">Click here</Link></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
