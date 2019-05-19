import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  fetchCoordsRequest,
  fetchCoordsSuccess,
  fetchCoordsFailure,
  setIsOrderMade
} from "./actions";

const isLoadingCoords = handleActions(
  {
    [fetchCoordsRequest]: () => true,
    [fetchCoordsSuccess]: () => false,
    [fetchCoordsFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchCoordsSuccess]: () => null,
    [fetchCoordsFailure]: (_state, action) => action.payload
  },
  null
);

const coords = handleActions(
  {
    [fetchCoordsSuccess]: (_state, action) => action.payload,
    [fetchCoordsFailure]: () => null
  },
  null
);

const isOrderMade = handleActions(
  {
    [setIsOrderMade]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isLoadingCoords,
  coords,
  error,
  isOrderMade
});
