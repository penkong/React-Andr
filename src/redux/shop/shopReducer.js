import SHOP_DATA from './ShopData'

const INIT_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state=INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default shopReducer;