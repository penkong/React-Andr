import { all, call, takeLatest, put } from "redux-saga/effects";

import { CLEAR_CART } from '../types';
import { clearCart } from './cartAction';


export function* clearCartOnSignOut () {
  yield put(clearCart());
}

export function* onClearSignOutSuccess() {
  yield takeLatest(CLEAR_CART, clearCartOnSignOut);
}



// root saga
export function* cartSagas() {
  yield(all([
    call(onClearSignOutSuccess),
  ]));
}