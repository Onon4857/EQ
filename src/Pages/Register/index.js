import React from "react";

const Register = () => {
  return (
    <div className="Main">
      <h1> EQSurvey </h1> 
      

      <form className="second" method="GET">
        <h2 className="second-header">ҮНЭГҮЙ БҮРТГҮҮЛЭХ</h2>
        <p> 
            Та өмнө нь бүртгүүлж байсан уу?
          <button type="button" className="second-button">
            Нэвтрэх
          </button>{" "}
        </p>
        <div className="register">
          {" "}
            <div class="register-grid">
                <div class="grid-item"> <hr></hr> </div>
                <div class="grid-item"> Шинээр бүртгүүлэх </div>
                <div class="grid-item"> <hr></hr> </div>  
            </div>

          
        
        <div className="register-burtgel">
          <input type="text"  Name="loginName" id="name" ></input>
          <br />
          <input type="password" Name="password" id="pass"></input>
          <br />
          <input type="text" Name="email" id="email"></input>
          <br />
          <input className="register-burtgel-Fname" type="text" Name="Fname" id="fname"></input>
          
          <input className="register-burtgel-Lname" type="text" Name="Lname" id="lname"></input>
          <br />

          <button className="register-button" type="submit" onClick="">
            Бүртгүүлэх
          </button>
          <p className="register-burtgel-notice">by clicking "Create acoount" or signing up, you agree to the
              <a href="#" > Terms of Use</a> and 
              <a href="#"> Privacy Notice </a> 
              You also agree to receive information and offer relevant 
              to our services via email. You can opt-out of these 
              emails in your My Acoount page anytime.</p>
        </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
