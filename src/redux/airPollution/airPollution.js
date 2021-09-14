// CONSTANTS
const GET_DETAILS = 'GET_DETAILS';
// const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
// const GET_BOOKS = 'bookStore/books/GET_BOOKS';

export const getDetails = (payload) => ({
  type: GET_DETAILS,
  payload,
});

// console.log(getDetails().type, getDetails().payload);
// export const addBook = (payload) => ({
//   type: ADD_BOOK,
//   payload,
// });

// export const removeBook = (payload) => ({
//   type: REMOVE_BOOK,
//   payload,
// });

const initialData = [];

const reducer = (state = initialData, action) => {
  // If our case action.type is 'ADD_BOOK' it will return what it is inisde the curley braces
  // otherwise return another case.
  switch (action.type) {
    case GET_DETAILS:
      return action.payload;
    // case ADD_BOOK:
    //   return [
    //     ...state,
    //     action.payload,
    //   ];
    // case REMOVE_BOOK:
    //   // action.payload receive the id of the ul I have in the UI
    //   return state.filter((book) => book[0] !== action.payload);
    default:
      return state;
  }
};

export default reducer;
