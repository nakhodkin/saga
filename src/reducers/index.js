import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import planet from './planet';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  planet,
  routing: routerReducer
});

export default rootReducer;
