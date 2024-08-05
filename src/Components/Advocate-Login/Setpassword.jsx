import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Setpassword.css';
import Successpassword from "./Successpassword";


const Setpassword = () => {
  const [isActive, setIsActive] = useState(null);
  const [showSuccesspassword, setShowSuccesspassword] = useState(false);



  const handleloginClick = () => {
    setIsActive("login");
  };

  const handleregisterClick = () => {
    setIsActive("register");
  };

  
  const handlePasswordClick = () => {
    setShowSuccesspassword(true);
  };


  return (
      <div id="login-register-form">
          {showSuccesspassword ?  (
           <Successpassword />
        ) : (
         <> 
        <div className="login-form-container-5">
          <form>
            <div className="form-header-5">
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
            <div className="form-container-5">
            <div className="form-input-5">
              <p>User ID</p>
              <input
                type="email"
                name="email"
                placeholder="Enter 10-digit Mobile no.*"
              />
            </div>
            <div className="form-input-5">
              <p>One Time Password</p>
              <input
                type="password"
                name="password"
                placeholder="Enter 6-digit OTP*"
              />
            </div>
            <div className="form-setpass-login">
              <button type="submit" id="login-bttun" onClick={handlePasswordClick}>
                  Set Password
              </button>
              <h5 id="advocatee-name">ADVOCATE LOGIN</h5>
              </div>
            </div>
          </form>
        </div>
        </>
        )}
      </div>
  );
};

export default Setpassword;
