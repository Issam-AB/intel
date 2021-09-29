import { combineReducers } from "redux";

import themeReducer from "./customThemeReducer";
import authReducer from "./authReducer";
import customAuthReducer from "./customAuthReducer";

export const rootReducer = combineReducers({
  themeReducer,
  authReducer,
  customAuthReducer,
});
