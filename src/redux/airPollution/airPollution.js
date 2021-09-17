// CONSTANTS
const GET_DETAILS = 'GET_DETAILS';

export const getDetails = (payload) => ({
  type: GET_DETAILS,
  payload,
});

const initialData = [];

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
