import React, { useState } from "react";
import { Link } from "react-router-dom";
import './LoginOtp.css';


const LoginOtp = () => {
  const [isActive, setIsActive] = useState(null);

  const handleloginClick = () => {
    setIsActive("login");
  };

  const handleregisterClick = () => {
    setIsActive("register");
  };

  return (
      <div id="login-register-form">
        <div className="login-form-container-1">
          <form>
            <div className="form-header">
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
            <div className="form-input">
              <p>User ID</p>
              <input
                type="number"
                name="number"
                placeholder="Enter 10-digit Mobile no.*"
              />
              <button type="submit">Generate Otp</button>
            </div>
            <div className="form-input">
              <p>One Time Password</p>
              <input
                type="text"
                name="password"
                placeholder="Enter 6-digit OTP*"
              />
            </div>
            <div className="form-links-login">
              <button type="submit" id="login-button">
                Login
              </button>
              <h5 id="advo-name">ADVOCATE LOGIN</h5>
            </div>
          </form>
        </div>
      </div>

  );
};

export default LoginOtp;
