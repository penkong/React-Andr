import { createSelector } from 'reselect';
// storing list of el s inside obj rather than arr is data normalize
// it pull out of whole state in combine reducer only direcroy
const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  )
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => 
    collections[key]
  )  : []
)

export const selectCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching 
)

export const selectCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections 
)


