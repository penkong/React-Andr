import { 
  SET_CURRENT_USER, 
  GOOGLE_SIGN_IN_START, 
  GOOGLE_SIGN_IN_SUCCESS, 
  GOOGLE_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE
} from '../types';

// user == userAuth
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const googleSingInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const googleSingInSuccess = user => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSingInFailure = error => ({
  type: GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

export const emailSingInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const emailSingInSuccess = user => ({
  type: EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSingInFailure = error => ({
  type: EMAIL_SIGN_IN_FAILURE,
  payload: error
});