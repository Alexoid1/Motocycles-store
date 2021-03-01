import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import './TestMotoPage.css';
import 'react-datepicker/dist/react-datepicker.css'

const TestMotoPage = () => {
  const [text, setText] = useState('All');
  const [city, setCity] = useState('Quito');
  const [selectedDate, setSelectedDate] = useState(null)
  const motoCategories = [
    {name:'1937 Brough Superior SS100', index:1 },
    {name:'1950 Vincent Black Shadow',index:2},
    {name:'1957 Harley-Davidson Sportster',index:3},
    {name:'Dodge Tomahawk V10', index:4},
    {name:'Neiman Marcus Limited Edition Fighter', index:5},
    {name:'Ecosse Spirit ES1', index:6},
    {name:'Ducati Superleggera V4', index:7},
    {name:'Harley-Davidson Buchered Blue Edition', index:8},
    {name:'Suzuki AEM Carbon Fiber Hayabusa', index:9},
    {name:'Kawasaki Ninja H2R', index:10},
    {name:'NCR MH TT', index:11},
    {name:'Icon Sheene', index:12},
    {name:'Honda RC213 V-S', index:13},
    {name:'Ecosse Titanium Series FE TI XX',index:14},
    {name:'Yamaha Crux', index:15}
    ];
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
    'Paris'
    ];

    const handleTextChange = e => {
      const { target: { value } } = e;
      setText(value);
      // changeFilter(value);
      // searchByFilter();
    };

    const handleCityChange = e => {
      const { target: { value } } = e;
      setCity(value);
      // changeFilter(value);
      // searchByFilter();
    };

  return (
    <div className="contTC">
        <div className="contTest">
            <div className="formContainer">
                <h2>BOOK A MOTORCYCLE TEST-RIDE</h2>
                <hr/>
                <p>There more than 15 motorcycles model. There are showrooms all over the globe which some includes test-ride facilities if you want to find-out if a test-ride is available plese use the selector below</p>
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
                    minDate={new Date}
                    className="selectFilter filter"
                    placeholderText="Select Date"
                    />
                    <div className="btnCont">
                      <button type="submit" className="booknow" >Book Now</button>
                    </div>
                    
                  </form>
                  
                </div>
            </div>
            <div>
              
            </div>
        </div>

    </div>
    
  );
}

export default TestMotoPage;