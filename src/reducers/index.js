import { combineReducers } from 'redux';

import actorsReducer from './actorsReducer';
import displayReducer from './displayReducer';

export default combineReducers({
  display: displayReducer,
  actors: actorsReducer
});
