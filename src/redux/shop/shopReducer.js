// import SHOP_DATA from './ShopData';
import { UPDATE_COLLECTIONS } from "../types";

// collections: SHOP_DATA
const INIT_STATE = {
  collections: null
};

const shopReducer = (state=INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {...state, collections: action.payload }
    default:
      return state;
  }
}

export default shopReducer;