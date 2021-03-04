import FavouriteSlider from '../components/FavouriteSlider';
import TestsContainer from '../components/TestsContainer';
import NotFound from '../containers/NotFound';
import './FavouritesPage.css';

const FavouritesPage = () => (
  <div className="compCont3" id="website_favourites">
    <h1 className="titleMoto">FAVOURITES MODELS</h1>
   
      <FavouriteSlider />
    
    
    <h1 className="titleMoto">TESTS RIDES</h1>
    <TestsContainer />

  </div>
);

export default FavouritesPage;
