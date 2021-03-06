import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SliderMotoPage from '../components/SliderMotoPage';
import AsideMenu from '../components/AsideMenu';
import Table2 from '../components/Table2';
import Table1 from '../components/Table1';
import './MotoPage.css';

const MotoPage = ({ motos }) => {
  const { id } = useParams();
  const rout = `/Test-Moto/${id}`;
  const moto = motos.filter(moto => moto.id === id * 1)[0];
  return (
    <div className="motosComp">
      <AsideMenu />
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
                <Link to="motorcycles" className="nonee"><button className="butonTT" type="button">Back</button></Link>
                <Link to={rout}><button className="butonTT" type="button">Book Motorcycle</button></Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MotoPage.propTypes = {
  motos: PropTypes.arrayOf(PropTypes.object),
};

MotoPage.defaultProps = {
  motos: [],
};

const mapStateToProps = state => ({
  motos: state.motos.motos,
});

export default connect(mapStateToProps)(MotoPage);
