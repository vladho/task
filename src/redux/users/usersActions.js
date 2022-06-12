import { createAction } from "@reduxjs/toolkit";

const fetchUSersRequest = createAction("users/fetch/request");
const fetchUSersSuccess = createAction("users/fetch/success");
const fetchUSersError = createAction("users/fetch/error");

const usersActions = {
  fetchUSersRequest,
  fetchUSersSuccess,
  fetchUSersError,
};

export default usersActions;
