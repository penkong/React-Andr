// this is for meomize dispatchers and mapToStates for not rerender every time

// indeed we make here smaller states to low cost re render
import { createSelector } from 'reselect';

// input selector and 

// get whole state return slice of that
const selectUser = state => state.user;



// output selector
// its memoize selector now
export const selectCurrentUser = createSelector(
  // collection of input selectors (7)
  selectUser,
  user=> user.currentUser
)

