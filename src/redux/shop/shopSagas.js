// import certain effects
// allow us to diff things with store or actions or listening
// saga purpose is to run whole these sagas concurrently(without block exec)

import { takeEvery } from "redux-saga/effects";
import { FETCH_COLLECTIONS_START } from "../types";

// a task saga runs 
export function* fetchCollectionsAsync() {
  yield console.log('I am fired');
}

export function* fetchCollectionsStart() {
  // non blocking call
  yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync )
}





