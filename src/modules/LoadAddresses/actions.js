import { createAction } from "redux-actions";

export const fetchAddressesRequest = createAction("FETCH_ADDRESSES_REQUEST");
export const fetchAddressesSuccess = createAction("FETCH_ADDRESSES_SUCCESS");
export const fetchAddressesFailure = createAction("FETCH_ADDRESSES_FAILURE");
