import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App" data-testid="website_name">
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;
