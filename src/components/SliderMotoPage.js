import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SliderMotoPage.css';

const SliderMotoPage = ({ moto }) => {
  const imagesMotos = [moto.image, moto.image2, moto.image3];
  const [img, setImg] = useState(moto.image);
  const handleChangeImage2 = e => {
    e.preventDefault();
    setImg(imagesMotos[1]);
  };
  const handleChangeImage = e => {
    e.preventDefault();
    setImg(imagesMotos[0]);
  };
  const handleChangeImage3 = e => {
    e.preventDefault();
    setImg(imagesMotos[2]);
  };
  return (
    <div className="motoPageC">
      <div className="imageI">
        <img src={img} alt="moto" />
        <div className="dotContainer">
          <i className="fa fa-circle" aria-hidden="true" onClick={handleChangeImage} />
          <i className="fa fa-circle" aria-hidden="true" onClick={handleChangeImage2} />
          <i className="fa fa-circle" aria-hidden="true" onClick={handleChangeImage3} />
        </div>
      </div>
      <Link to="/motorcycles" className="disnone">
        <button className="buttonLeft anc" type="button">
          <i className="fa fa-chevron-left fa-2x" aria-hidden="true" />
        </button>
      </Link>

    </div>
  );
};

SliderMotoPage.propTypes = {
  moto: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
    image3: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    maxpower: PropTypes.string.isRequired,
  }),
};

SliderMotoPage.defaultProps = {
  moto: {},
};

export default SliderMotoPage;
