const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case 'UPDATE_DISPLAY':
    return [...state, action.payload];
  case 'DELETE_ACTOR':
    // eslint-disable-next-line no-case-declarations
    const filteredState = state.filter((actor) => (actor.name !== action.actorName));
    return filteredState;
  default:
    return state;
  }
};
