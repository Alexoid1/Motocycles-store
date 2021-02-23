import React, { useState } from 'react';
import Slider from '../components/Slider';
import LoginForm from '../components/LoginForm'
import './SignUpPage.css';

const SignUpPage = () => {
  const [backgroundi,setBackgroundi] = useState('pageCover');
  
  const ChangeBackground =(e)=>{
    e.preventDefault();
    setBackgroundi('pageCover')
  }

  const ChangeBackground2 =(e)=>{
    e.preventDefault();
    setBackgroundi('pageCover2')
  }

  const ChangeBackground3 =(e)=>{
    e.preventDefault();
    setBackgroundi('pageCover3')
  }

  const ChangeBackground4 =(e)=>{
    e.preventDefault();
    setBackgroundi('pageCover4')
  }

    return (
      <div className={backgroundi}>
        <div className="sliderCont">
          <LoginForm/>
          <Slider 
            background1={ChangeBackground} 
            background2={ChangeBackground2} 
            background3={ChangeBackground3} 
            background4={ChangeBackground4}
          />
        </div>   
      </div>   
    );
}
  

  
export default SignUpPage;