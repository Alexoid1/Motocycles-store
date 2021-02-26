import React from 'react';
import { Link } from 'react-router-dom';
import './MotoCard.css';

const MotoCard = ({ id, image, name, model }) => {
  const rou="/motorcycles/"+id
  
  return (
    
      <div className="cardMoto">
        <Link to={rou}>
          <div className="circleCont">
            <img className="imgCont" src={image} alt="heroimage" />
          </div>
          <h5>{name}</h5>
          <p className="description">{model}</p>
        </Link>
        <div className="iconsC">
          <div>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
          </div>
          <div>
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <div>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
      </div>
   
  );
}

export default MotoCard;