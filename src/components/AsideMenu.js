import React from 'react';
import { NavLink } from 'react-router-dom';
import './AsideMenu.css';

const AsideMenu = () => (
  <div className="navBar">
    <nav>
      <div className="optionCont">
        <div className="sele">
          <h1 className="title2">MOTORCYCLE</h1>
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

export default AsideMenu;
