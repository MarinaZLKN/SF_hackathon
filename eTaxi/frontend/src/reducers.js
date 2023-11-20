import { combineReducers } from 'redux';

const cityInfoReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CITY_INFO':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  cityInfo: cityInfoReducer,
});