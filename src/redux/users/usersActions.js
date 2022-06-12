import { createAction } from "@reduxjs/toolkit";

export const getUsersRequest = createAction("@users/getRequest");
export const getUsersSuccess = createAction("@users/getSuccess");
export const getUsersError = createAction("@users/getError");
