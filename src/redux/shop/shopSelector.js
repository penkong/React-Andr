import { createSelector } from 'reselect';
// storing list of el s inside obj rather than arr is data normalize
// it pull out of whole state in combine reducer only direcroy
const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => 
    collections[key]  
  )
)

export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )
);