import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/index";
import api from "../middlewares/api";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api]),
});
export default store;
