import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import bgimg from "../../Assets/Backgrdimage.png";
import logov1 from "../../Assets/LogoV1.png";
import "./Login.css";

const Login = () => {

  const [isActive, setIsActive] = useState(null);
   
  const handleloginClick = () => {
    setIsActive('login');
  };
  
  const handleregisterClick = () => {
     setIsActive('register');
  };

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
            <Link to='/' id="link-1"><label className={`login-text ${isActive === 'login' ? 'active' : ''}`} onClick={handleloginClick}>LOGIN</label></Link>

             <Link to='/' id="link-1"><label className={`register-text ${isActive === 'register' ? 'active' : ''}`} onClick={handleregisterClick}>REGISTER</label></Link>
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
