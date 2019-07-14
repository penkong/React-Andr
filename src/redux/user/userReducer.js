import { 
  GOOGLE_SIGN_IN_SUCCESS, 
  EMAIL_SIGN_IN_SUCCESS, 
  GOOGLE_SIGN_IN_FAILURE, 
  EMAIL_SIGN_IN_FAILURE 
} from '../types';

const INIT_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state= INIT_STATE, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN_SUCCESS:
    case EMAIL_SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload , error: null };
    case GOOGLE_SIGN_IN_FAILURE:
    case EMAIL_SIGN_IN_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default userReducer;