import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, createUsers } from '../actions/index';
import PropTypes from 'prop-types';
import './LoginForm.css'

const LoginForm = ({ fetchUsers, createUsers, users }) => {
    const [displays, setDisplays] = useState('inline-block');
    const [displays2, setDisplays2] = useState('none');
    const [email, setEmail] = useState(users.email);
    const [name, setName] = useState(users.name);
    const [login, setLogin] = useState('Login')

    const handleChangeDisplay = (e) => {
        e.preventDefault();
        setDisplays('none');
        setDisplays2('inline-block')
      }
    
      const handleSearchUser = (e) => {
        e.preventDefault();
        fetchUsers(email)
        
      }

      const handleCreateUser = (e) => {
        e.preventDefault();
        createUsers(name, email)
        
      }
    
      const handleTextChange = (e) => {
        setEmail(e.target.value)
      }
      const handleNameChange = (e) => {
        setName(e.target.value)
      }

      const handleChangeFormType = (e) => {
        e.preventDefault();
        if(login==='Login'){
            setLogin('Sign up')
        }else {
            setLogin('Login')
        }
        
      }
      
      let comp;
      if (!users.email&&users.called) {
        comp='User do not Exist.';
      }

      let formLog;
      if (login==='Login'){
          formLog=(
          <div>
            <form style={{display: displays2}}>
                <input className="inputEmail" type="email" placeholder="Write Your Email" onChange={handleTextChange}/>
                <button className="startBoton" type="submit" onClick={handleSearchUser}>Start</button>
            </form>
            <p className="messageAlert">{comp}</p> 
          </div>)
      }else{
          formLog=(
          <div>
            <form style={{display: displays2}}>
                <input className="inputEmail mail" type="text" placeholder="Write Your Name" onChange={handleNameChange}/><br/>
                <input className="inputEmail mail" type="email" placeholder="Write Your Email" onChange={handleTextChange}/><br/>
                <button className="startBoton mail" type="submit" onClick={handleCreateUser}>Create</button>
            </form>
            </div>)
      }
  return (
    <div>
        <h1 className="loginTitle">TRY A MOTORCYCLE</h1>
        <button className="butonLogin" onClick={handleChangeDisplay} style={{display: displays}}>{login}</button>
        <button className="butonChangeForm" onClick={handleChangeFormType} style={{display: displays}}><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></button>
          {formLog}
        
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    createUsers: (name, email) => dispatch(createUsers(name, email)), 
});
    
const mapStateToProps = state => ({
    users: state.users,
});
    
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);