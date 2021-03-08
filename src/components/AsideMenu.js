import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setUser,
} from '../actions/index';
import './AsideMenu.css';

const AsideMenu = ({ setUser }) => {
  const user = JSON.parse(localStorage.getItem('userMoto'));

  useEffect(() => {
    setUser(user);
  }, []);

  return (
    <div className="navBar">
      <nav>
        <div className="optionCont">
          <div className="sele">
            <h1 className="title2">MOTORCYCLE</h1>
            <p className="name">{user.name}</p>
          </div>

          <ul>
            <li>
              <NavLink
                className="linkAside"
                to="/motorcycles"
                exact
                activeStyle={{
                  backgroundColor: 'rgb(151, 190, 15)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%',
                }}
              >
                MODELS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favourites"
                exact
                activeStyle={{
                  backgroundColor: 'rgb(151, 190, 15)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%',
                }}
              >
                FAVORITES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Test-Moto/1"
                exact
                activeStyle={{
                  backgroundColor: 'rgb(151, 190, 15)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%',
                }}
              >
                TEST DRIVE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                exact
                activeStyle={{
                  backgroundColor: 'rgb(151, 190, 15)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%',
                }}
              >
                LOG OUT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="iconCont">
          <i className="fa fa-facebook-official fa-lg" aria-hidden="true" />
          <i className="fa fa-twitter fa-lg" aria-hidden="true" />
          <i className="fa fa-google-plus fa-lg" aria-hidden="true" />
          <i className="fa fa-vimeo fa-lg" aria-hidden="true" />
          <i className="fa fa-pinterest-p fa-lg" aria-hidden="true" />
        </div>
      </nav>
    </div>

  );
};

AsideMenu.propTypes = {
  setUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
});

export default connect(null, mapDispatchToProps)(AsideMenu);
