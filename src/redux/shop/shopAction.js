import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from "../types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";


export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

// when ever code update or run for first time , 
// observable pattern has live style update
export const fetchCollectionsStartAsync = () => dispatch => {
  
  const collectionRef = firestore.collection('collections');

  dispatch(fetchCollectionsStart());

  collectionRef.get().then(snapshot => {
    // its a util to make code less
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    dispatch(fetchCollectionsSuccess(collectionsMap));

  }).catch(error=> dispatch(fetchCollectionsFailure(error.message)))
}