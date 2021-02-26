import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DotLoader from "react-spinners/ClipLoader";
import './MotosSlider.css'
import MotoCard from './MotoCard'
import {
    fetchMotos,
  } from '../actions/index';

const MotosSlider = ({ fetchMotos, motos }) => {
  const[index,setIndex]=useState(3)
  useEffect(() => {
    fetchMotos();
  }, []);

  

  const nextSlide = () => {
    if(index+1===motos.motos.length){
      setIndex(3)
    }else{
      setIndex(index +1)
    }
    
  }

  const prevSlide = () => {
    if(index-4<0){
      setIndex(motos.motos.length-1)
    }else{
      setIndex(index -1)
    }
    
  }

  const itemArr = (ind,moto) =>{
    const lastIndex=index-3
    if(ind<=index && ind>lastIndex ){
      return(<MotoCard
        key={moto.id}
        id={moto.id}
        image={moto.image}
        name={moto.name}
        model={moto.model}
      />)
    }
  }

  let comp;
  if (motos.loading||motos.motos.length===0) {
    comp = 
      <div className="loader">
        <DotLoader />
      </div>;
  } else if (motos.error) {
    comp = <h2 className="error">{motos.error}</h2>;
  } else {
    comp=
    <div className="sliderContainer">
        <button className="buttonLeft" type="button" onClick={prevSlide}><i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i></button>
        <div className="header-container">
          {
            motos.motos.map((moto,ind) => (
              itemArr(ind,moto) 
            ))
          }
        </div>
        <button className="buttonRight" type="button" onClick={nextSlide} ><i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i></button>
        
    </div>
 }
  return comp
}

const mapDispatchToProps = dispatch => ({
    fetchMotos: () => dispatch(fetchMotos()),
});
  
const mapStateToProps = state => ({
    motos: state.motos,
});
  
export default connect(mapStateToProps, mapDispatchToProps)(MotosSlider);