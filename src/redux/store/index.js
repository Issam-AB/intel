import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/index";
import api from "../middlewares/api";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api]),
});
export default store;

// import { rootReducer } from "../reducers/index";

// const composeEnhancers = composeWithDevTools({});

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

// import { rootReducer } from "../reducers/index";

// const composeEnhancers = composeWithDevTools({});

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;
