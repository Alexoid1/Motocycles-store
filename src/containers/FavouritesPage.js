import MotosSlider from '../components/MotosSlider'
import './MotorcyclesPage.css';
const FavouritesPage = () => {
  return (      
    <div className="compCont2">
        <h1 className="titleMoto">FAVOURITES MODELS</h1>
        <p className="par">Please select a motorcycle model</p>
        <MotosSlider/>
    </div> 
  );
}

export default FavouritesPage;