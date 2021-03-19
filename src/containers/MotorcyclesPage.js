import MotosSlider from '../components/MotosSlider';
import AsideMenu from '../components/AsideMenu';
import './MotorcyclesPage.css';

const MotorcyclesPage = () => (
  <div className="motosComp">
    <AsideMenu />
    <div className="compCont2">
      <h1 className="titleMoto">LATEST MODELS</h1>
      <p className="par">Please select a motorcycle model</p>
      <MotosSlider />
    </div>
  </div>
);

export default MotorcyclesPage;
