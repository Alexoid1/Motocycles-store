import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DotLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';
import TestMoto from './TestMoto';
import fetchConfig from '../helpers/fetch';
import baseUrl from '../helpers/base-url';
import './TestsContainer.css';

import {
  fetchMotoBook,

} from '../actions/index';

const TestsContainer = ({
  bookmoto, motos
}) => {
  const [bokmoto, setBokmoto] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/tests`, fetchConfig())
    .then(res => {
      if (res.ok) {
        res.json().then(jsonRes => {
          setBokmoto(jsonRes)
        });
      }
    });
  }, []);

  let comp2;
  if (bookmoto.loading) {
    comp2 = (
      <div className="loader">
        <DotLoader />
      </div>
    );
  } else if (bokmoto.length === 0) {
    comp2 = <div className="loader"><h2 className="error">No Test-Drive added yet</h2></div>;
  } else {
    comp2 = (
      <div className="testBoxCont">

        <div className="reverse">
          {
            bokmoto.map(book => (
              <TestMoto
                key={`${book.id}c`}
                id={book.id}
                motocycle={motos[book.motocycle_id - 1]}
                date={book.testDate}
                city={book.city}
              />
            ))
          }
        </div>

      </div>
    );
  }
  return comp2;
};

TestsContainer.propTypes = {
  fetchMotoBook: PropTypes.func.isRequired,
  bookmoto: PropTypes.shape({
    bookmoto: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  }),
  motos: PropTypes.arrayOf(PropTypes.object),
};

const mapDispatchToProps = dispatch => ({
  fetchMotoBook: () => dispatch(fetchMotoBook()),
});

const mapStateToProps = state => ({
  bookmoto: state.bookmoto,
  motos: state.motos.motos,
});

export default connect(mapStateToProps, mapDispatchToProps)(TestsContainer);
