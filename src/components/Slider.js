import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

const Slider = ({
  background1, background2, background3, background4,
}) => (
  <div className="circleContainer">
    <button className="circle" type="button" onClick={background1}>.</button>
    <button className="circle" type="button" onClick={background2}>.</button>
    <button className="circle" type="button" onClick={background3}>.</button>
    <button className="circle" type="button" onClick={background4}>.</button>
  </div>
);

Slider.propTypes = {
  background1: PropTypes.string.isRequired,
  background2: PropTypes.string.isRequired,
  background3: PropTypes.string.isRequired,
  background4: PropTypes.string.isRequired,
};

export default Slider;
