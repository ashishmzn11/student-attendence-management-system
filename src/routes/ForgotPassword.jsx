// import React, { useState } from 'react';

function ForgotPassword() {
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Mock API call or integration
  //   if (email) {
  //     // Simulate success
  //     setMessage(`If the email ${email} is associated with an account, you'll receive a password reset link.`);
  //   } else {
  //     setMessage('Please enter a valid email address.');
  //   }
  // };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header text-center app-bgcolor">
              <h4>Forgot Password</h4>
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
                  />
                </div>
                <button type="submit" className="btn app-bgcolor w-100">Send Reset Link</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
