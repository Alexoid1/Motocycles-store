import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './SliderMotoPage.css'

const SliderMotoPage = ({moto}) => {
    const  imagesMotos = [moto.image, moto.image2, moto.image3]
    const [img, setImg] = useState(moto.image)
    const handleChangeImage2 = (e) => {
        e.preventDefault()
        setImg(imagesMotos[1])
    }
    const handleChangeImage = (e) => {
        e.preventDefault()
        setImg(imagesMotos[0])
    }
    const handleChangeImage3 = (e) => {
        e.preventDefault()
        setImg(imagesMotos[2])
    }
  return (
    <div class="motoPageC">
        <div className="imageI">
            <img src={img}></img>
            <div className="dotContainer">
                <i class="fa fa-circle" aria-hidden="true" onClick={handleChangeImage}></i>
                <i class="fa fa-circle" aria-hidden="true" onClick={handleChangeImage2}></i>
                <i class="fa fa-circle" aria-hidden="true" onClick={handleChangeImage3}></i>
            </div>
        </div>
        <Link  to='/motorcycles'>
            <button className="buttonLeft anc" >
                <i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
            </button> 
        </Link>
        
    </div>
  );
}

export default SliderMotoPage;