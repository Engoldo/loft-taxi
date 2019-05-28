import { createAction } from "redux-actions";

export const login = createAction("TEST_LOGIN");
export const logout = createAction("TEST_LOGOUT");
export const testAuth = createAction("TEST_AUTH");
export const handleProfileSubmit = createAction("HANDLE_PROFILE_SUBMIT");
export const handleProfileClear = createAction("HANDLE_PROFILE_CLEAR");
