// this is for meomize dispatchers and mapToStates for not rerender every time

// indeed we make here smaller states to low cost re render
import { createSelector } from 'reselect';

// input selector and 

// get whole state return slice of that
const selectCart = state => state.cart;


// output selector
// its memoize selector now
export const selectCartItems = createSelector(
  // collection of input selectors (7)
  [selectCart],
  cart => cart.cartItems
)

// now make cart items selector now ( bring mapState to here)
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulate, cartItem) => {
    return accumulate + cartItem.quantity
  }, 0)
)