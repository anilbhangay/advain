import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Newpassword.css';
import Setpassword from "./Setpassword";


const  Successpassword = () => {
  const [isActive, setIsActive] = useState(null);
  const [showSetpassword, setShowSetpassword] = useState(false);


  const handleloginClick = () => {
    setIsActive("login");
  };

  const handleregisterClick = () => {
    setIsActive("register");
  };

  const handleGenerateClick = () => {
    setShowSetpassword(true);
  };

  return (
      <div id="login-register-form">
          {showSetpassword ?  (
           <Setpassword />
        ) : (
         <> 
        <div className="login-form-container-4">
          <form>
            <div className="form-header-4">
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
            <div className="form-container-4">
            <div className="form-input-4">
              <p>User ID</p>
              <input
                type="email"
                name="email"
                placeholder="Enter 10-digit Mobile no.*"
              />
            </div>
            <div className="form-input-4">
              <p>Password</p>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password*"
              />
            </div>
            <div className="form-input-4">
              <p>Confirm New Password</p>
              <input
                type="password"
                name="password"
                placeholder="Re-enter New Password*"
              />
            </div>
            <div className="form-pass-login">
              <button type="submit" id="login-btun" onClick={handleGenerateClick}>
                Generate OTP
              </button>
              <h5 id="advocate-name">ADVOCATE LOGIN</h5>
              </div>
            </div>
          </form>
        </div>
        </>
        )}
      </div>
  );
};

export default Successpassword;
