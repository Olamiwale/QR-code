import react, { useState } from "react";

function Converter() {
  return (
    <div className="bg">
      <div className="blue-bg">
        <div className="login-form">
          <div className="sign-in">
            <h2>Sign in</h2>
            <label>Username</label>
            <input className="username" type="text" />
            <label>Password</label>
            <input className="password" type="text" />
            <div className="button">
              <div className="button-fp">
                <button>Sign in</button>
                <div>Forget your password?</div>
              </div>

              <div className="create-account">Don't have an account?</div>

              <a href="#">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Converter;
