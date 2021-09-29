import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Reducer import helpers
// import { reducer } from "../bugs";

import { rootReducer } from "../reducers/index";

const composeEnhancers = composeWithDevTools({});

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
