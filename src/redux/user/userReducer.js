import { 
  SIGN_IN_SUCCESS, 
  SIGN_IN_FAILURE, 
} from '../types';

const INIT_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state= INIT_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload , error: null };
    case SIGN_IN_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default userReducer;