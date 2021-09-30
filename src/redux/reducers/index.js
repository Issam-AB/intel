import { combineReducers } from "redux";

import themeReducer from "./customThemeReducer";
//import authReducer from "./authReducer";
import authReducer from "./customAuthReducer";

export const rootReducer = combineReducers({
  themeReducer,
  authReducer,
});
