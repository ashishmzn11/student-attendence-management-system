// import style from "./Registion.module.css";
function Registration(){
  return(
<>

<div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header text-center app-bgcolor">
              <h4>Faclty Registration</h4>
            </div>
            <div className="card-body">
              {/* <form onSubmit={handleSubmit}> */}
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                   <label htmlFor="email" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Full"
                    placeholder="Full Name"
                    required
                  />
                   <label htmlFor="email" className="form-label">Birth Day</label>
                  <input
                   type="date" 
                   id="dob"
                     className="form-control"
                    placeholder="Birth Day"
                    required
                  />
                  <label htmlFor="email" className="form-label">Phone</label>
                  <input type="tel"
                   id="phone" 
                   className="form-control"
                     placeholder="mobile"
                      pattern="[0-9]{10}"
                       required />
                       <label htmlFor="email" className="form-label">Password</label>
                  <input
                   type="password" 
                    id="password" 
                     className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <button type="submit" className="btn  w-100 app-bgcolor">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

  )
}
export default Registration;