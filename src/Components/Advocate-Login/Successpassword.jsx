import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Successpassword';


const  Successpassword = () => {
  const [isActive, setIsActive] = useState(null);
 

  const handleloginClick = () => {
    setIsActive("login");
  };

  const handleregisterClick = () => {
    setIsActive("register");
  };


  return (
      <div id="login-register-form">
        <div className="login-form-container-6">
          <form>
            <div className="form-header-6">
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
            <div className="form-container-6">
            <div className="form-input-6">
               <label>Password set successfully!</label>
            </div>
           
            <div className="form-succs-login">
              <h5 id="advocates-name">ADVOCATE LOGIN</h5>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Successpassword;
