import {
  createStore, applyMiddleware, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import detailsReducer from './airPollution/airPollution';

const rootReducer = combineReducers({
  details: detailsReducer,
});

export default function generateStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk),
  );
  return store;
}
