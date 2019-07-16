// import certain effects
// allow us to diff things with store or actions or listening
// saga purpose is to run whole these sagas concurrently(without block exec)
import { FETCH_COLLECTIONS_START } from "../types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
// put == dispatch in thunk
// take alone effect give us back payload
// take every allow us to run every call but take run one time
// take is like while(){} ,, delay() effect
import { all, takeLatest, call, put } from "redux-saga/effects";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shopAction";

// a task saga runs 
export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    // use call because we yield it if it take more time than we expect
    const collectionsMap =  yield call(convertCollectionsSnapshotToMap, snapshot);
    // put is saga effect to create action
    // dispatch out an obj ==> it go from here again to saga middleware => reducers
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }  
}

export function* fetchCollectionsStart() {
  // non blocking call
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync )
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart),
  ])
}









