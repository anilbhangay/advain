import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Newpassword.css';


const Newpassword = () => {
  const [isActive, setIsActive] = useState(null);
  const [showNewpassword, setShow] = useState(false);


  const handleloginClick = () => {
    setIsActive("login");
  };

  const handleregisterClick = () => {
    setIsActive("register");
  };

  return (
      <div id="login-register-form">
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
            <div className="form-container">
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
            <div className="form-link-login">
              <button type="submit" id="login-btun">
                Generate OTP
              </button>
              <h5 id="advocate-name">ADVOCATE LOGIN</h5>
              </div>
            </div>
          </form>
        </div>
      </div>

  );
};

export default Newpassword;
