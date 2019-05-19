export const getIsLoggedIn = state => state.authReducer.isLoggedIn;
export const getProfile = state => state.authReducer.profile;
export const getIsProfileFilled = state =>
  state.authReducer.profile &&
  Object.keys(state.authReducer.profile).length > 0;
