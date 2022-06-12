import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { getUsers } from "../../../redux/users/usersOperation";
import { getAllUsers } from "../../../redux/users/usersSelectors";

const OurUsersList = () => {
  const users = useSelector(getAllUsers);
  return <></>;
};

export default OurUsersList;
