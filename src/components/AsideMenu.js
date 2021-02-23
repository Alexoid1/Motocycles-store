import React from 'react';
import './AsideMenu.css'

const AsideMenu = () => {
  return (
    <div className="navBar">
        <nav>
            <div>
                <h1 className="title2">MOTORCYCLE</h1>
                <ul>
                <li>MODELS</li>
                <li>LIFESTYLE</li>
                <li>SHOP</li>
                <li>TEST DRIVE</li>
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

export default AsideMenu;