import axios from "axios";
import * as actions from "../actions/apiActions";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiRequestStarted.type) return next(action);

    const { url, data, method, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart, payload: action.payload });
    //start api
    dispatch(actions.apiRequestStarted(action.payload));

    try {
      const res = await axios({
        baseURL: "https://localhost:8080/api/",
        url,
        data,
        method,
      });

      if (onSuccess) dispatch({ type: onSuccess, payload: res.data });
      dispatch(actions.apiRequestSuccess(action.payload));
    } catch (error) {
      if (onError) dispatch({ type: onError, payload: error.message });
      dispatch(
        actions.apiRequestFailed({
          request: action.payload,
          error: error.message,
        })
      );
    }
  };

export default api;
