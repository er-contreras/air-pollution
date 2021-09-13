import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Forecast from './pages/Forecast';
import About from './pages/About';
import fetchForecast from './components/apiManager';

console.log(fetchForecast());

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          <Forecast />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
