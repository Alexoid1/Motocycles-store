import { Route, Switch } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import MotorcyclesPage from './MotorcyclesPage';
import FavouritesPage from './FavouritesPage';
import MotoPage from './MotoPage';
import AsideMenu from '../components/AsideMenu';
import TestMotoPage from './TestMotoPage';
import './MotorcyclesPage.css';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignUpPage} />
    <Route exact path="/Test-Moto/:id" component={TestMotoPage} />
    <div className="motosComp">
      <AsideMenu />
      <Route exact path="/motorcycles" component={MotorcyclesPage} />
      <Route exact path="/motorcycles/:id" component={MotoPage} />
      <Route exact path="/favourites" component={FavouritesPage} />
    </div>

  </Switch>
);

export default Routes;
