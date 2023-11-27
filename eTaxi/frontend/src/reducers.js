import { combineReducers } from 'redux';


const cityInfoReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CITY_INFO':
      return action.payload;
    default:
      return state;
  }
};

const videosReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_VIDEOS':
      return action.payload;
    default:
      return state;
  }
};

const carInfoReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CAR_INFO':
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  cityInfo: cityInfoReducer,
  videos: videosReducer,
  carInfo: carInfoReducer,
});