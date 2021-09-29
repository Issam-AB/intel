import { createAction } from "@reduxjs/toolkit";

const apiRequestStarted = createAction("api/requestStarted");
const apiRequestSuccess = createAction("api/requestSuccess");
const apiRequestFailed = createAction("api/requestFailed");

export { apiRequestStarted, apiRequestSuccess, apiRequestFailed };
