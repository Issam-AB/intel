import { createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "../actions/apiActions";
import * as globals from "../../constants/index";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    messageSucceeded: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },

    requestStarted: (state, action) => {
      state.isLoading = true;
      // state.user = null;
    },

    loginFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    requestSuccess: (state, action) => {
      state.messageSucceeded = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    requestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    resetErrorAndSeccess: (state) => {
      state.error = null;
      state.isLoading = false;
      state.messageSucceeded = null;
    },
    signOut: (state) => {
      localStorage.removeItem(globals.USER_TOKEN);
      state.user = null;
    },
  },
});

export default authSlice.reducer;
export const {
  requestStarted,
  loginSuccess,
  loginFailed,
  requestFailed,
  requestSuccess,
  resetErrorAndSeccess,
  signOut,
} = authSlice.actions;

export const login = (data) =>
  apiRequest({
    url: "/auth/login",
    data,
    method: "POST",
    onStart: requestStarted.type,
    onError: loginFailed.type,
    onSuccess: loginSuccess.type,
  });

export const resetPassword = (data) =>
  apiRequest({
    url: "/auth/password-reset",
    data,
    method: "POST",
    onStart: requestStarted.type,
    onSuccess: requestSuccess.type,
    onError: requestFailed.type,
  });

export const createNewPassword = (data, { id, token }) =>
  apiRequest({
    url: `/auth/password-reset/${id}/${token}`,
    data,
    method: "POST",
    onStart: requestStarted.type,
    onSuccess: requestSuccess.type,
    onError: requestFailed.type,
  });

export const getUserByToken = (data) => {
  console.log(data);
  return apiRequest({
    url: `/auth/token`,
    data,
    method: "POST",
    onStart: requestStarted.type,
    onSuccess: loginSuccess.type,
    onError: signOut.type,
  });
};
