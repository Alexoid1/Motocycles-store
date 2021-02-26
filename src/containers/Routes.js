import { Route, Switch } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import MotorcyclesPage from './MotorcyclesPage';
import FavouritesPage from './FavouritesPage';
import MotoPage from './MotoPage';
import AsideMenu from '../components/AsideMenu';
import './MotorcyclesPage.css'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignUpPage} />
    <div className="motosComp">
      <AsideMenu/>
      <Route exact path="/motorcycles" component={MotorcyclesPage} />
      <Route exact path="/motorcycles/:id" component={MotoPage} />
      <Route exact path="/users/:id/favourites" component={FavouritesPage} />
    </div>
    
  </Switch>
);

export default Routes;