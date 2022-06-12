import { createReducer } from "@reduxjs/toolkit";

import { getUsersSuccess } from "./usersActions";

const initialState = {
  users: [],
};

export const usersReducer = createReducer(initialState.users, {
  [getUsersSuccess]: (_, { payload }) => [...payload],
});

export const error = createReducer(null, {});
