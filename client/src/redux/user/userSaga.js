import { takeLatest, put, all, call } from "redux-saga/effects";
import { 
  GOOGLE_SIGN_IN_START, 
  EMAIL_SIGN_IN_START, 
  CHECK_USER_SESSION, 
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS
} from "../types";
import { 
  signUpSuccess,
  signUpFailure,
  singInSuccess, 
  singInFailure,
  signOutSuccess,
  signOutFailure,
} from "./userAction";
import { 
  auth, 
  googleProvider, 
  createUserProfileDocument, 
  getCurrentUser
} from "../../firebase/firebase.utils";


// userCredentials
export function* signUp({ payload: { email, password, displayName }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName }}));
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* onSignUpStart() {
    yield takeLatest(SIGN_UP_START, signUp)
}
//////////////
export function* signInAfterSignUp ({ payload: { user, additionalData }}) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpSuccess() {
    yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}
///////////////
export function* getSnapshotFromUserAuth(userAuth, additionalData ) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    // put dispatch things into regular redux flow
    yield put(singInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(singInFailure(error));
  }
}
//////////////
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(singInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}
//////////////
export function* signInWithEmail ({ payload: { email, password }}) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(singInFailure());
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}
/////////////
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(singInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}
//////////////
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}
/////////////
export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onGoogleSignInStart), 
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}