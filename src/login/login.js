import React from "react";


const login = () => {


  return (
    <div className="Main">
      <h1 className="Main-header"> EQSurvey </h1> 
        <button type="submit" className="Main-button">
            Бүртгүүлэх
        </button>

    <div className="Login">
        <h2 className="Login-header"> БҮРТГЭЛЭЭРЭЭ НЭВТРЭХ</h2>

        <div className="Login-input">
          <div className="Login-name">
            <label className="Login-label">Enter your username</label> <br />
            <input type="text" Name="loginName" id="name" required ></input>
            <br />
        </div>
          
        <div className="Login-password">
            <label className="Login-label">Enter your password</label> <br />
            <input type="password" Name="password" id="pass"></input>
            <br />
          </div>

        <div className="Login-remember">
            <input type="checkbox" id="remember-me" className="Login-check"/>
            <label className="Login-remlabel"> Remember me </label>
                <a href="#" className="Login-forgot">Forgot Password or Username</a>
        </div>

            <button className="Login-button" type="submit" onClick="">
                НЭВТРЭХ
            </button>
        </div>
      </div>
    </div>
  );
};

export default login;
