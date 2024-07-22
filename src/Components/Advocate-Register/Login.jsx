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
      
    </div>
  );
};

export default Login;
