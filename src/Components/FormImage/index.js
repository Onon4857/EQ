import React from "react";
import Image from "../../Images/Login.jpeg";
import Logo from "../Logo";

const FormImage = () => {
  return (
    <div className="FormImage">
      <div>
        <img
          alt="EQSurvey | Монголын анхы судалгааны онлайн хэрэгсэл"
          src={Image}
        />
        <div className="Overlay Overlay--dark"></div>
        <div className="FormImage__content">
          <Logo />
          <h1>Тавтай морил</h1>
          <p>
            Монголын хамгийн анхны судалгааны онлайн хэрэгсэл. EQSurvey
            тусламжтайгаар хэрэглэгчдийнхээ юу хүсэж байгааг мэдэх, тэдний дуу
            хоолойг сонсож, үйлчилгээгээ сайжруулах боломжтой.
          </p>
        </div>
        <div className="FormImage__socials">
          <a target="_blank" href="www.facebook.com">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a target="_blank" href="www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a target="_blank" href="www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a target="_blank" href="98765432">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormImage;
