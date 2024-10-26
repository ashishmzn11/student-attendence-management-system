import style from "./Login.module.css";
function Login() {
  return (
    <div class={`row ${style.ro}`}>
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <div class={`card-body  ${style.wt}`}>
            1
            <img src="./img/1.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class={`card-body  ${style.wt}`}>
           <form>
            <input type="text" ></input>
            <input type="password" ></input>
           </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
