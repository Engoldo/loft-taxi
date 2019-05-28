import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./modules";

const getInitialState = () => {
  let initialState;
  if (localStorage.state) {
    const { isLoggedIn, profile } = JSON.parse(localStorage.state);
    initialState = {
      isLoggedIn: isLoggedIn,
      profile: profile
    };
  } else {
    initialState = {
      isLoggedIn: false,
      profile: {}
    };
  }
  return initialState;
};

export const sagaMiddleware = createSagaMiddleware();

const getStore = () =>
  createStore(
    rootReducer,
    { authReducer: { ...getInitialState() } },
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );

export default getStore;
