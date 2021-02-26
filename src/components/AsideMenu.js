import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  createUsersSuccess,
} from '../actions/index';
import './AsideMenu.css';

const AsideMenu = ({users}) => {
  const user = JSON.parse(localStorage.getItem('userMoto'));
  createUsersSuccess(user)
  
  const rou=`users/${user.id}/favourites`
  
  console.log(user)
  return (
    <div className="navBar">
        <nav>
            <div>
                <h1 className="title2">MOTORCYCLE</h1>
                <p className="name">{user.name}</p>
                <ul>
                  <Link to="/motorcycles"><li>MODELS</li></Link>
                  <Link to={rou}><li>FAVORITES</li></Link>
                  <li>TEST DRIVE</li>
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
  createUsersSuccess : (user) => dispatch(createUsersSuccess (user)),
});

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(AsideMenu);