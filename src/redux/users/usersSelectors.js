import { createSelector } from "@reduxjs/toolkit";

const getAllUsers = (state) => state.users;

const usersSelectors = {
  getAllUsers,
};

export default usersSelectors;
