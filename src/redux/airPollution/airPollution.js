// import { v4 as uuidv4 } from 'uuid';
import countries from '../../components/countriesData';

// CONSTANTS
const GET_DETAILS = 'GET_DETAILS';
const ADD_COUNTRIES = 'ADD_COUNTRIES';

export const getDetails = (payload) => ({
  type: GET_DETAILS,
  payload,
});

export const addCountriesAction = (payload) => ({
  type: ADD_COUNTRIES,
  payload,
});

const initialData = [];

const reducer = (state = initialData, action) => {
  console.log(action.payload);
  switch (action.type) {
    case GET_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export const addCountries = () => (dispatch) => {
  dispatch(addCountriesAction(
    countries.map((country, capital, id, className, index, coord, img) => ({
      country,
      capital,
      id,
      img,
      className,
      index,
      coord,
    })),
  ));
};

export default reducer;
