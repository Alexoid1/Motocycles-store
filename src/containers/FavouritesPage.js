import FavouriteSlider from '../components/FavouriteSlider';
import TestsContainer from '../components/TestsContainer'
import './FavouritesPage.css';
const FavouritesPage = () => {
  return (      
    <div className="compCont3">
        <h1 className="titleMoto">FAVOURITES MODELS</h1>
        <FavouriteSlider/>
        <h1 className="titleMoto">TESTS RIDES</h1>
        <TestsContainer/>
        
    </div> 
  );
}

export default FavouritesPage;