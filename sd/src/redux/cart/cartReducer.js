import { TOGGLE_CART } from '../types';


const INIT_STATE = {
  hidden: true
};

export const cartReducer = (state=INIT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
}