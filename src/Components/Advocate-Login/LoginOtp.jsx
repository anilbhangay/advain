import React, { useState } from "react";
import { Link } from "react-router-dom";
import './LoginOtp.css';
import Newpassword from "./Newpassword";


const LoginOtp = () => {
  const [isActive, setIsActive] = useState(null);
  const [showNewpassword, setShowNewpassword] = useState(false);


  const handleloginClick = () => {
    setIsActive("login");
  };

  const handleregisterClick = () => {
    setIsActive("register");
  };

  const handleLoginOtpClick = () => {
    setShowNewpassword(true);
  };

  return (
      <div id="login-register-form">
         {showNewpassword ?  (
           <Newpassword />
        ) : (
         <> 
        <div className="login-form-container-3">
          <form>
            <div className="form-header-3">
              <Link to="/" id="link-1">
                <label
                  className={`login-text ${
                    isActive === "login" ? "active" : ""
                  }`}
                  onClick={handleloginClick}
                >
                  LOGIN
                </label>
              </Link>

              <Link to="/" id="link-1">
                <label
                  className={`register-text ${
                    isActive === "register" ? "active" : ""
                  }`}
                  onClick={handleregisterClick}
                >
                  REGISTER
                </label>
              </Link>
            </div>
            <div className="form-container">
            <div className="form-input-3">
              <p>User ID</p>
              <input
                type="number"
                name="number"
                placeholder="Enter 10-digit Mobile no.*"
              />
              <button id="gotp-btn" type="submit">Generate OTP</button>
            </div>
            <div className="form-input-3" id="form-2">
              <p>One Time Password</p>
              <input
                type="text"
                name="password"
                placeholder="Enter 6-digit OTP*"
              />
            </div>
            <div className="form-link-login">
              <button type="submit" id="login-btn" onClick={handleLoginOtpClick}>
                Login
              </button>
              <h5 id="advoc-name">ADVOCATE LOGIN</h5>
              </div>
            </div>
          </form>
        </div>
        </>
        )}
      </div>

  );
};

export default LoginOtp;
