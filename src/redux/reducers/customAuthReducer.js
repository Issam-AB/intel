import { createSlice } from "@reduxjs/toolkit";
import { apiRequestStarted } from "../actions/apiActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    userAdded: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },

    addRequestStarted: (state, action) => {
      state.isLoading = true;
    },

    userAddedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
export const { addRequestStarted, userAdded, userAddedFailed } =
  authSlice.actions;

// export {} fro
export const addUser = () =>
  apiRequestStarted({
    url: "/user/add",
    onStart: addRequestStarted.type,
    onError: userAddedFailed.type,
    onSuccess: userAdded.type,
  });
