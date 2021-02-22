import { Route, Switch } from 'react-router-dom';
import SignUpPage from './SignUpPage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignUpPage} />
  </Switch>
);

export default Routes;