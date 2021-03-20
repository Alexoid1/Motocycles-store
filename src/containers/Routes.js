import { Route, Switch } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import MotorcyclesPage from './MotorcyclesPage';
import FavouritesPage from './FavouritesPage';
import MotoPage from './MotoPage';
import TestMotoPage from './TestMotoPage';
import NotFound from './NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignUpPage} />
    <Route exact path="/Test-Moto/:id" component={TestMotoPage} />
    <Route exact path="/motorcycles" component={MotorcyclesPage} />
    <Route exact path="/motorcycles/:id" component={MotoPage} />
    <Route exact path="/favourites" component={FavouritesPage} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
