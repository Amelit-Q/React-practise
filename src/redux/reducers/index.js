import filter from './filters';
import pizzas from './pizzas';
import cart from './cart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  //комбинируются reducerы здесь
  filter,
  pizzas,
  cart,
});

export default rootReducer;
