const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case 'UPDATE_DATA':
    return [...action.payload];
  default:
    return state;
  }
};
