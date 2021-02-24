import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './MotoPage.css'

const MotoPage = ({motos}) => {
    const { id } = useParams();
    const moto = motos.motos.filter(moto => moto.id === id * 1)[0];
  return (
       <div className="motopage">
     
       </div>
  );
}


const mapStateToProps = state => ({
    motos: state.motos,
});
  
export default connect(mapStateToProps)(MotoPage);