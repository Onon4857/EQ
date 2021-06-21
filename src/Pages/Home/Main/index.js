import React, { useState } from "react";
import Header from '../Header/header';
import './home.css';
import Typical from 'react-typical';
import Image from '../../../Images/survey1.png'

const Home = () => {
  const [shake] = useState(false);
  
  
  return (
    <div className="Main-page">
        <div className="Header" >
        <Header />
        </div>
        <div className="Main">
          <div className="Main-hero"> 
            <p className="Main-text">
              <Typical loop={Infinity} steps={[
                'Манай үйлчилэгчид үнэхээр сэтгэл хангалуун байж чадаж байна уу?',1000,
                "Survey software trusted by the world's best companies",1000
              ]}/>
            </p>
            <p className='Main-text2'>
              EQSurvey нь Монголын хамгийн анхны судалгааны онлайн хэрэгсэн юм.
            </p>
            <h1>

            </h1>
            <p className="">
              <button className="Main-button">
               Эхлэх
              </button>
            </p>
            <div className="Second">
              <p className="Second-img1">
                <img 
                alt="EQSurvey | Монголын анхны судалгааны онлайн хэсэг"
                src={Image}/>
              </p>
              <div className="Second-text">
                <p className="Second-text-hd">Create amazing surveys</p>
                <p className="Second-text-p">Get started with designing your perfect survey today. Add multiple question types, logic, and personalized branding. The limits are only that of your own creativity. 
                  Did we mention it was easy? Explore how we make it possible.</p>
                <div className="Second-text-list">
                  <a href='#' className="Second-link">QUESTION TYPES</a>
                  <a href='#' className="Second-link">LOGIC</a>
                  <a href='#' className="Second-link">BRANDING</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      
      
    </div>
  );
};

export default Home;
