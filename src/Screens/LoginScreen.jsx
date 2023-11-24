import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const welcomeScreen = (
    <>
      <h1>Unlimited films, TV programmes and more.</h1>
      <h2>Watch anywhere. Cancel at any time.</h2>
      <h3>
        Ready to watch? Enter your email to create or restart your membership
      </h3>
      <div className="loginScreen__input">
        <form>
          <input type="email" placeholder="email address" />
          <button
            className="loginScreen__getStarted"
            onClick={() => setSignIn(true)}
          >
            Get Started
          </button>
        </form>
      </div>
    </>
  );
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="./images/logo.png"
          alt="backdrop"
        />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? <SignUpScreen /> : welcomeScreen}
      </div>
    </div>
  );
};

export default LoginScreen;