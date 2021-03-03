import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SliderMotoPage from '../components/SliderMotoPage';
import Table2 from '../components/Table2';
import Table1 from '../components/Table1';
import './MotoPage.css';

const MotoPage = ({ motos }) => {
  const { id } = useParams();
  const rout = `/Test-Moto/${id}`;
  const moto = motos.motos.filter(moto => moto.id === id * 1)[0];
  return (

    <div className="motopage">
      <SliderMotoPage moto={moto} />
      <div className="tableCont">
        <div>
          <div className="contCta">
            <h3 className="tableTitle">
              {moto.name}
            </h3>
            <Table2
              model={moto.model}
              speed={moto.speed}
              engine={moto.engine}
              power={moto.maxpower}
            />
            <Table1 price={moto.price} />
            <div className="butonTc">
              <Link to="motorcycles" className="nonee"><button className="butonTT">Back</button></Link>
              <Link to={rout}><button className="butonTT">Book Motorcycle</button></Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  motos: state.motos,

});

export default connect(mapStateToProps)(MotoPage);
