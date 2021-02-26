import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './AsideMenu.css';

const AsideMenu = ({users}) => {
  // const [name, setName] = useState(users.user.name)
  console.log(users.user)
  return (
    <div className="navBar">
        <nav>
            <div>
                <h1 className="title2">MOTORCYCLE</h1>
                {/* <p>{users.user.name}</p> */}
                <ul>
                  <Link to="/motorcycles"><li>MODELS</li></Link>
                  <li>FAVORITES</li>
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

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(AsideMenu);