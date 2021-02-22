import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';
import Slider from '../components/Slider'
import './SignUpPage.css';

function SignUpPage({fetchUsers, users}) {
  const [backgroundi,setBackgroundi] = useState('pageCover');
  const [displays, setDisplays] = useState('inline-block');
  const [displays2, setDisplays2] = useState('none');
  const [email, setEmail] = useState(users.email)

  

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

  const handleChangeDisplay = (e) => {
    e.preventDefault();
    setDisplays('none');
    setDisplays2('inline-block')
  }

  const handleSearchUser = (e) => {
    e.preventDefault();
    fetchUsers(email)
    
  }

  const handleTextChange = (e) => {
    setEmail(e.target.value)
  }
  
  let comp;
  if (!users.email&&users.called) {
    comp='User do not Exist.';
  }

  
    return (
      <div className={backgroundi}>
        <div className="sliderCont">
          <div>
            <h1 className="loginTitle">TRY A MOTORCYCLE</h1>
            <button className="butonLogin" onClick={handleChangeDisplay} style={{display: displays}}>Login <i className="fa fa-chevron-circle-right" aria-hidden="true"></i></button>
            <form style={{display: displays2}}>
              <input className="inputEmail" type="email" placeholder="Write Your Email" onChange={handleTextChange}/>
              <button className="startBoton" type="submit" onClick={handleSearchUser}>Start</button>
            </form>
            
            <p className="messageAlert">{comp}</p>
          </div>
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
  
const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()), 
});
  
const mapStateToProps = state => ({
  users: state.users,
});
  
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);