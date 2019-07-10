import { TOGGLE_CART, ADD_ITEM } from '../types';
import { addItemToCart } from './cartUtils';


const INIT_STATE = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state=INIT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return {...state, cartItems: addItemToCart(state.cartItems, action.payload) };
    default:
      return state;
  }
}