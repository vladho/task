import axios from "axios";

import {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
} from "./usersActions";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

export const getUsers = () => async (dispatch) => {
  dispatch(getUsersRequest());

  try {
    // console.log("try");
    const data = await axios.get("/users");
    // console.log(data.data.users);
    dispatch(getUsersSuccess(data.data.users));
  } catch (error) {
    dispatch(getUsersError());
  }
};
