import React from 'react';
import './MotoCard.css';

const MotoCard = ({ id, image, name, model, price }) => {
  return (
    
      <div className="cardHero">
        <div className="circleCont">
          <img className="imgCont" src={image} alt="heroimage" />
        </div>
        <h5>{name}</h5>
        <p className="description">sdu ijoidjcoi ijdsaofisdj isjdofisdj jsodifjs sdjosdkdo</p>
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