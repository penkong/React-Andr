import { takeLatest, put, all, call } from "redux-saga/effects";
import { GOOGLE_SIGN_IN_START } from "../types";
import { googleSingInSuccess, googleSingInFailure } from "./userAction";
import { auth, googleProvider, createUserProfileDocument } from "../../firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    // put dispatch things into regular redux flow
    yield put(googleSingInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(googleSingInFailure(error));
  }
}


export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}