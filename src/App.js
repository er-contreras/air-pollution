import './styles/App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Forecast from './components/Forecast';
import Details from './pages/Details';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Forecast />
          </Route>

          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
