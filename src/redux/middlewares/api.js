import axios from "axios";
import * as actions from "../actions/apiActions";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiRequest.type) return next(action);

    dispatch(actions.apiRequestStarted());
    next(action);
    const { url, data, method, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    //start api

    try {
      const res = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url,
        data,
        method,
      });

      if (onSuccess) dispatch({ type: onSuccess, payload: res.data });
      dispatch({ type: actions.apiRequestSuccess.type });
    } catch (error) {
      if (onError)
        dispatch({ type: onError, payload: error.response.data.message });
      dispatch(actions.apiRequestFailed());
    }
  };

export default api;
