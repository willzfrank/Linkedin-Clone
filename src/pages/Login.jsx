import React from "react";
import "../Styles/Login.css";
import Hero from "../Images/login-hero.svg";
import Logo from "../Images/login-logo.svg";
import Google from "../Images/google.svg";
function Login() {
  return (
    <>
      <nav>
        <div>
          <img src={Logo} alt="Linked-in Logo" className="nav--logo" />
        </div>
        <div className="linkedin--signin">
          <div className="linkedin--join--btn">Join now</div>

          <div type="button" className="button">
            Sign In
          </div>
        </div>
      </nav>
      <header>
        <div className="header">
          <div>
            <h1 className="header--text">
              Welcome to your professional community{" "}
            </h1>
          </div>
          <div>
            <img src={Hero} alt="linkedin-hero" />
          </div>
        </div>

        <div className=" google--button--container">
          <button type="button" className="button google--button">
            <img src={Google} alt="google-authentication" className="google" />
            <p>Sign in with Google</p>
          </button>
        </div>
      </header>
    </>
  );
}

export default Login;
