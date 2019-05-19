import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./Auth";
import loadAddressesReducer from "./LoadAddresses";
import coordsReducer from "./Coords";
import { spawn } from "redux-saga/effects";
import { authWatcher } from "./Auth/sagas";
import { loadAddressesWatcher } from "./LoadAddresses/sagas";
import { getCoordsWatcher } from "./Coords/sagas";
import { handleLocalStorageSaga } from "./localStorageSaga";

export const rootSaga = function* rootSaga() {
  yield spawn(authWatcher);
  yield spawn(loadAddressesWatcher);
  yield spawn(getCoordsWatcher);
  yield spawn(handleLocalStorageSaga);
};

export default combineReducers({
  authReducer,
  loadAddressesReducer,
  coordsReducer,
  form: formReducer
});
