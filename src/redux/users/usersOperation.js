import { api } from "../../services";
import axios from "axios";
import usersActions from "./usersActions";

const { fetchUSersRequest, fetchUSersSuccess, fetchUSersError } = usersActions;

const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUSersRequest());

  try {
    const data = await api.getAllUsers();
    dispatch(fetchUSersSuccess(data));
    console.log(data);
  } catch (error) {
    dispatch(fetchUsersError());
  }
};

const usersOperatios = {
  fetchUsers,
};

export default usersOperatios;
