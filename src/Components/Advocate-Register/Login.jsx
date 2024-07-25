import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgimg from "../../Assets/Backgrdimage.png";
import logov1 from "../../Assets/LogoV1.png";
import "./Login.css";

const Login = () => {
  const [isActive, setIsActive] = useState(null);
  const [isuserActive, setIsUserActive] = useState(null);

  const handleloginClick = () => {
    setIsActive("login");
  };

  const handleregisterClick = () => {
    setIsActive("register");
  };

  const handleloginuserClick = () => {
    setIsUserActive("login-1");
  };

  const handleregisteruserClick = () => {
    setIsUserActive("register-1");
  };

  return (
    <div className="container">
      <div id="logo-1">
        <img src={logov1} alt="No" />
      </div>
      <div id="bgcimg-1">
        <img src={bgimg} alt="No" />
      </div>
    <div id="login-register-form">
      <div className="login-form-container-1">
        <form>
          <div className="form-header">
            <Link to="/" id="link-1">
              <label
                className={`login-text ${isActive === "login" ? "active" : ""}`}
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
              type="email"
              name="email"
              placeholder="Enter 10-digit Mobile no.*"
            />
          </div>
          <div className="form-input">
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password*"
            />
          </div>
          <div className="form-links-login">
            <h4>
              <a id="forgot-pass" href="/">
                Forgot Password ?
              </a>
            </h4>
            <button type="submit" id="login-button">
              Login
            </button>
            <p id="space">----------- OR -----------</p>
            <button type="submit" id="otp-button">
              Login with OTP
            </button>
            <h5 id="advo-name">ADVOCATE LOGIN</h5>
          </div>
        </form>
      </div>
      <div className="login-form-container-2">
        <form>
          <div className="form-header">
            <Link to="/" id="link-2">
              <label
                className={`login-text-1 ${isuserActive === "login-1" ? "active" : ""}`}
                onClick={handleloginuserClick}
              >
                LOGIN
              </label>
            </Link>

            <Link to="/" id="link-2">
              <label
                className={`register-text-1 ${
                  isuserActive === "register-1" ? "active" : ""
                }`}
                onClick={handleregisteruserClick}
              >
                REGISTER
              </label>
            </Link>
          </div>
          <div className="form-input">
            <p>User ID</p>
            <input
              type="email"
              name="email"
              placeholder="Enter 10-digit Mobile no.*"
            />
          </div>
          <div className="form-input">
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password*"
            />
          </div>
          <div className="form-links-login">
            <h4>
              <a id="forgot-pass" href="/">
                Forgot Password ?
              </a>
            </h4>
            <button type="submit" id="login-button">
              Login
            </button>
            <p id="space">----------- OR -----------</p>
            <button type="submit" id="otp-button">
              Login with OTP
            </button>
            <h5 id="advo-name-1">USER LOGIN</h5>
          </div>
        </form>
      </div>
      </div>
    </div>
    
 
  );
};

export default Login;
