import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/motorcycles"><li>MODELS</li></Link>
            <Link to="/favourites"><li>FAVORITES</li></Link>
            <Link to="/Test-Moto/1"><li>TEST DRIVE</li></Link>
            <Link to="/"><li>LOG OUT</li></Link>
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
