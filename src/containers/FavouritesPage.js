import FavouriteSlider from '../components/FavouriteSlider';
import TestsContainer from '../components/TestsContainer';
import AsideMenu from '../components/AsideMenu';
import './FavouritesPage.css';

const FavouritesPage = () => (
  <div className="motosComp">
    <AsideMenu />
    <div className="compCont3" id="website_favourites">
      <h1 className="titleMoto">FAVOURITES MODELS</h1>
      <FavouriteSlider />
      <h1 className="titleMoto">TESTS RIDES</h1>
      <TestsContainer />
    </div>
  </div>

);

export default FavouritesPage;
