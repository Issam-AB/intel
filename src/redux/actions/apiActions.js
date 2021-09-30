import { createAction } from "@reduxjs/toolkit";

// to detect the qpi requests dont dispatch inside middelware
const apiRequest = createAction("api/request");

const apiRequestStarted = createAction("api/requestStarted");
const apiRequestSuccess = createAction("api/requestSuccess");
const apiRequestFailed = createAction("api/requestFailed");

export { apiRequest, apiRequestStarted, apiRequestSuccess, apiRequestFailed };
