import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css'

const Slider = ({ background1, background2, background3, background4 }) => {
  return (
    <div className="circleContainer" >
        <div className="circle" role="button" onClick={background1}/>
        <div className="circle" role="button" onClick={background2}/>
        <div className="circle" role="button" onClick={background3}/>
        <div className="circle" role="button" onClick={background4}/>
    </div>
  );
}

export default Slider;