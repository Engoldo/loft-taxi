import { startSubmit, stopSubmit } from "redux-form";
import { put, call, takeLeading } from "redux-saga/effects";

import { login, testAuth } from "./actions";
import { checkAuth } from "../../modules/Auth/api";

export function* authPostWorker(action) {
  try {
    return yield call(checkAuth, action.payload);
  } catch (error) {
    return { error: error.message };
  }
};

export function* authWorker(action) {
  yield put(startSubmit("loginform"));
  const { error, success } = yield call(authPostWorker, action);
  if (success) {
    yield put(login(success));
  } else {
    yield put(
      stopSubmit("loginform", {
        userName: "Неверное имя пользователя или пароль",
        userPassword: "Неверное имя пользователя или пароль",
        _error: error
      })
    );
  }
};

export function* authWatcher() {
  yield takeLeading(testAuth.toString(), authWorker);
};
