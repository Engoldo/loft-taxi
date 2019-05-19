import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  login,
  logout,
  handleProfileSubmit,
  handleProfileClear
} from "./actions";

const isLoggedIn = handleActions(
  {
    [login]: (_state, action) => action.payload,
    [logout]: (_state, action) => action.payload
  },
  false
);

const profile = handleActions(
  {
    [handleProfileSubmit]: (_state, action) => action.payload,
    [handleProfileClear]: (_state, action) => action.payload
  },
  {}
);

export default combineReducers({
  isLoggedIn,
  profile
});
