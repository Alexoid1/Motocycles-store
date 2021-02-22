import React, { useState } from 'react';
import './SignUpPage.css';

function SignUpPage() {
  const [backgroundi,setBackgroundi] = useState('pageCover')
  const [displays, setDisplays] = useState('inline-block')
  const [displays2, setDisplays2] = useState('none')

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

  const handleChangeDisplay = () => {
    setDisplays('none');
    setDisplays2('inline-block')
  }

    return (
      <div className={backgroundi}>
        <div className="sliderCont">
          <div>
            <h1 className="loginTitle">TRY A MOTORCYCLE</h1>
            <button className="butonLogin" onClick={handleChangeDisplay} style={{display: displays}}>Login <i className="fa fa-chevron-circle-right" aria-hidden="true"></i></button>
            <form style={{display: displays2}}>
              <input className="inputEmail" type="email" placeholder="Write Your Email"/>
              <button className="startBoton"  type="submit">Start</button>
            </form>
          </div>
          <div className="circleContainer" >
            <div className="circle" role="button" onClick={ChangeBackground}/>
            <div className="circle" role="button" onClick={ChangeBackground2}/>
            <div className="circle" role="button" onClick={ChangeBackground3}/>
            <div className="circle" role="button" onClick={ChangeBackground4}/>
          </div>
        </div>   

      </div>
       
    );
  }
  
export default SignUpPage;