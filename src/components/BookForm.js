import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createMotoBook } from '../actions/index';
import fetchConfig from '../helpers/fetch';
import baseUrl from '../helpers/base-url';
import 'react-datepicker/dist/react-datepicker.css';
import './BookForm.css';

const BookForm = ({ createMotoBook }) => {
  const { id } = useParams();
  const history = useHistory();

  const [city, setCity] = useState('Quito');
  const [selectedDate, setSelectedDate] = useState(null);
  const motoCategories = [
    { name: '1937 Brough Superior SS100', index: 1 },
    { name: '1950 Vincent Black Shadow', index: 2 },
    { name: '1957 Harley-Davidson Sportster', index: 3 },
    { name: 'Dodge Tomahawk V10', index: 4 },
    { name: 'Neiman Marcus Limited Edition Fighter', index: 5 },
    { name: 'Ecosse Spirit ES1', index: 6 },
    { name: 'Ducati Superleggera V4', index: 7 },
    { name: 'Harley-Davidson Buchered Blue Edition', index: 8 },
    { name: 'Suzuki AEM Carbon Fiber Hayabusa', index: 9 },
    { name: 'Kawasaki Ninja H2R', index: 10 },
    { name: 'NCR MH TT', index: 11 },
    { name: 'Icon Sheene', index: 12 },
    { name: 'Honda RC213 V-S', index: 13 },
    { name: 'Ecosse Titanium Series FE TI XX', index: 14 },
    { name: 'Yamaha Crux', index: 15 },
  ];

  const [text, setText] = useState(motoCategories[id - 1].name);
  const cities = [
    'Quito',
    'New York',
    'Los Angeles',
    'Berlin',
    'Londres',
    'Beijin',
    'Buenos Aires',
    'Bogota',
    'Tokyo',
    'Moscu',
    'Madrid',
    'Seul',
    'Mexico',
    'Paris',
  ];

  const handleTextChange = e => {
    const { target: { value } } = e;
    setText(value);
  };

  const handleCityChange = e => {
    const { target: { value } } = e;
    setCity(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${baseUrl}/tests`, {
      ...fetchConfig(),
      method: 'POST',
      body: JSON.stringify({
        motocycle_id: id,
        testDate: selectedDate.toString(),
        city,

      }),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(jsonRes => {
            createMotoBook(jsonRes);
          });
        }
      });

    history.push('/motorcycles');
  };

  return (
    <div className="formC">
      <form>
        <select
          value={text}
          onChange={handleTextChange}
          className="selectFilter"
        >
          <option value="All">All</option>
          {
              motoCategories.map(moto => (
                <option
                  key={moto.name}
                  value={moto.name}
                >
                  {moto.name}
                </option>
              ))
              }
        </select>
        <select
          value={city}
          onChange={handleCityChange}
          className="selectFilter"
          placeholder="City"
        >
          {
              cities.map(city => (
                <option
                  key={city}
                  value={city}
                >
                  {city}
                </option>
              ))
              }
        </select>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
          className="selectFilter filter"
          placeholderText="Select Date"
        />
        <div className="btnCont">
          <button type="button" className="booknow" onClick={handleSubmit}>Book Now</button>
        </div>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  createMotoBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createMotoBook: (motoid, date, city) => dispatch(createMotoBook(
    motoid,
    date,
    city,
  )),
});

const mapStateToProps = state => ({
  user: state.users.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
