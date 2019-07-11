import { createSelector } from 'reselect';

// it pull out of whole state in combine reducer only direcroy
const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);