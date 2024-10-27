import style from "./Login.module.css";
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
              <IoIosContact class="app-bgcolor">fff</IoIosContact>
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
              <button
                class="form-control btn btn-success app-bgcolor"
              >Login</button>
              
            </div>
            <div class={`input-group input-group-lg  ${style.input1}`}>
             <p > Forget Password? <a href="#">Click here</a></p>
            </div>
            <div class={`input-group input-group-lg  ${style.input1}`}>
             <h1 class={`${style.renew}`}> New registration? <a href="#">Click here</a></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
