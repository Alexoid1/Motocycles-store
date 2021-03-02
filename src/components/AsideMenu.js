import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setUser,
} from '../actions/index';
import './AsideMenu.css';

const AsideMenu = ({users, setUser}) => {
  const user = JSON.parse(localStorage.getItem('userMoto'));
  
  useEffect(() => {
    setUser(user);
  }, []);
  
  return (
    <div className="navBar">
        <nav>
            <div className="optionCont">
                <div>
                  <h1 className="title2">MOTORCYCLE</h1>
                  <p className="name">{user.name}</p>
                </div>
                
                <ul>
                  <Link to="/motorcycles"><li>MODELS</li></Link>
                  <Link to="/favourites"><li>FAVORITES</li></Link>
                  <Link to="/Test-Moto/1"><li>TEST DRIVE</li></Link>
                  <Link to="/"><li>LOG OUT</li></Link>
                </ul>
            </div>
            <div className="iconCont">
                <i class="fa fa-facebook-official fa-lg" aria-hidden="true"></i>
                <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
                <i class="fa fa-google-plus fa-lg" aria-hidden="true"></i>
                <i class="fa fa-vimeo fa-lg" aria-hidden="true"></i>
                <i class="fa fa-pinterest-p fa-lg" aria-hidden="true"></i>
            </div>
        </nav>
    </div>
    
  );
}

const mapDispatchToProps = dispatch => ({
  setUser : (user) => dispatch(setUser(user)),
});

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(AsideMenu);