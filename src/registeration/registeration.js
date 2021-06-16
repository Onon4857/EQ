import React from "react";

const Registeration = () => {
  return (
    <div className="head">
      <h1> EQSurvey </h1>

      <div className="head2">
        <h2>ҮНЭГҮЙ БҮРТГҮҮЛЭХ</h2>
        <p>
          Та өмнө нь бүртгүүлж байсан уу?
          <button type="button" className="button1">
            Нэвтрэх
          </button>{" "}
        </p>
        <div className="blah">
          {" "}
          <hr></hr>Шинээр бүртгүүлэх <hr></hr>
        </div>
        <div className="head3">
          <input type="text" Name="loginName" id="name"></input>
          <br />
          <input type="password" Name="password" id="pass"></input>
          <br />
          <input type="text" Name="email" id="email"></input>
          <br />
          <input type="text" Name="Fname" id="fname"></input>
          <br />
          <input type="text" Name="Lname" id="lname"></input>
          <br />

          <button className="button" type="submit" onClick="">
            Бүртгүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};
export default Registeration;
