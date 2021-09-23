import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import Forecast from './components/Forecast';
import Details from './components/Details';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Forecast />
      </Route>

      <Route path="/details">
        <Details />
      </Route>
    </Switch>
  );
}

export default App;
