// import style from "./Registion.module.css";
function Registration(){
  return(
<>
<h1 class="mt-5 d-flex justify-content-center align-items-center">Faclty Registration</h1>

        
  <div>
<div class="d-flex justify-content-center align-items-center mt-5">
  <input type="text" class="form-control border app-dark-input-border  py-3 w-50 mb-4"  placeholder="Full name" aria-label="Username" aria-describedby="addon-wrapping" required />
</div>
<div class="d-flex justify-content-center align-items-center ">
  <input type="tel" id="phone"  class="form-control py-3 w-50 mb-4"  placeholder="mobile" pattern="[0-9]{10}" aria-label="Username" aria-describedby="addon-wrapping" required />
</div>
<div class="d-flex justify-content-center align-items-center">
  <input type="date" id="dob" name="dob"class="form-control py-3 w-50 mb-4"  placeholder="Birth Date" aria-label="Username" aria-describedby="addon-wrapping" required />
</div>

<div class="d-flex justify-content-center align-items-center">
  <input type="text" class="form-control w-50 py-3 mb-4"  placeholder="Qualification" aria-label="Qualication" aria-describedby="addon-wrapping" required />
</div>
<div class="d-flex justify-content-center align-items-center">
  <input type="text"  id="username"class="form-control w-50 py-3 mb-4"  placeholder="Username" aria-label="Qualication" aria-describedby="addon-wrapping" required/>
</div>
<div class="d-flex justify-content-center align-items-center">
  <input type="text"  id="userId" class="form-control py-3 w-50 mb-4"  placeholder="User Id" aria-label="Qualication" aria-describedby="addon-wrapping" required/>
</div>
<div class="d-flex justify-content-center align-items-center">
  <input type="password"  id="password" class="form-control py-3 w-50 mb-4"  placeholder="Password" aria-label="Qualication" aria-describedby="addon-wrapping" required/>
</div>
<div class="d-flex justify-content-center align-items-center">
<button type="submit" class="form-control w-25 app-bgcolor py-3 mb-4">Register</button>
</div>
</div>
  </>

  )
}
export default Registration;