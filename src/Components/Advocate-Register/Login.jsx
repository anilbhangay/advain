import React from "react";
import bgimg from "../../Assets/Backgrdimage.png";
import logov1 from "../../Assets/LogoV1.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div id="logo-1">
        <img src={logov1} alt="No" />
      </div>
      <div id="bgcimg-1">
        <img src={bgimg} alt="No" />
      </div>
        <div className="login-form-container">
          <form>
            <div className="form-header">
            <h3>LOGIN</h3>
             <h3>REGISTER</h3>
            </div>
            <div className="form-input">
              <p>User ID</p>
              <input type="email" name="email" placeholder="Enter 10-digit Mobile no.*" />
            </div>
            <div className="form-input">
              <p>Password</p>
              <input type="password" name="password" placeholder="Enter Your Password*" />
            </div>
             <div className="form-links-login">
              <h4><a id="forgot-pass" href="/">Forgot Password ?</a></h4>
              <button type="submit" id="login-button">Login</button>
              <p id="space">---- OR ----</p>
              <button type="submit" id="otp-button">Login with OTP</button>
                <h4 id="advo-name">ADVOCATE LOGIN</h4>
             </div>
          </form>
        </div>
    </div>
  );
};

export default Login;
