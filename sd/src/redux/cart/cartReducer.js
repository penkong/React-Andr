import { TOGGLE_CART, ADD_ITEM, CLEAR_ITEM_FROM_CART } from '../types';
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
    case CLEAR_ITEM_FROM_CART:
      return {...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)};
    default:
      return state;
  }
}