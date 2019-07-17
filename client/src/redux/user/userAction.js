import { 
  GOOGLE_SIGN_IN_START, 
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS, 
  SIGN_IN_FAILURE,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_START
} from '../types';

// user == userAuth
// export const setCurrentUser = user => ({
//   type: SET_CURRENT_USER,
//   payload: user
// });

export const signUpStart = userCredentials => ({
  type: SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  payload: error
});

export const googleSingInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const emailSingInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const singInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const singInFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: SIGN_OUT_FAILURE,
  payload: error
});




// export const emailSingInSuccess = user => ({
//   type: EMAIL_SIGN_IN_SUCCESS,
//   payload: user
// });

// export const emailSingInFailure = error => ({
//   type: EMAIL_SIGN_IN_FAILURE,
//   payload: error
// });