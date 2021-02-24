import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DotLoader from "react-spinners/ClipLoader";
import './MotosSlider.css'
import MotoCard from './MotoCard'
import {
    fetchMotos,
  } from '../actions/index';

const MotosSlider = ({ fetchMotos, motos }) => {
//   const[arr, setArr] = useState(arrSlider(index));
  const[index,setIndex]=useState(3)
  useEffect(() => {
    fetchMotos();
  }, []);
  const arrSlider = (index) => {
      let start=index-3
      let mot=motos.motos.slice(start,index)
      return mot
  }
  let comp;
  if (motos.loading) {
    comp = <DotLoader />;
  } else if (motos.error) {
    comp = <h2 className="error">{motos.error}</h2>;
  } else {
    comp=
    <div className="sliderContainer">
        <button className="buttonLeft"><i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i></button>
        <div className="header-container">
          {
            arrSlider(index).map((moto,index) => (
              <MotoCard
                key={moto.id}
                id={moto.id}
                image={moto.image}
                name={moto.name}
                model={moto.model}
                price={moto.price}
              />
            ))
          }
        </div>
        <button className="buttonRight"><i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i></button>
        
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