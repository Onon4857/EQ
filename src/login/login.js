import React from "react";

const login = () => {
  return (
    <div className="head">
      <h1> EQSurvey </h1>
      <button type="button" className="button1">
        Бүртгүүлэх
      </button>
      <div className="main">
        <h2> БҮРТГЭЛЭЭРЭЭ НЭВТРЭХ</h2>

        <div className="Login">
          <div className="Login-header">
            <label className="Login-label">Enter your username</label> <br />
            <input type="text" Name="loginName" id="name"></input>
            <br />
          </div>
          <div className="pass">
            <label>Enter your password</label> <br />
            <input type="password" Name="password" id="pass"></input>
            <br />
          </div>
          <div className="rememb">
            <input type="checkbox" id="remember-me" />
            <label className="remlab">Remember me </label>
            <a href="#">Forgot Password or Username</a>
          </div>

          <button className="button" type="submit" onClick="">
            НЭВТРЭХ
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;
