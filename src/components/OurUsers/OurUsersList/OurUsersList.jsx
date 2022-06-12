import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/users/usersSelectors";
import OurUsersItems from "../OurUsersItems/OurUsersItems";
import styles from "./OurUsersList.module.scss";
import Button from "../../common/Button/Button";

const OurUsersList = () => {
  const users = useSelector(getAllUsers);
  return (
    <>
      <ul className={styles.list}>
        {users.map((el) => (
          <OurUsersItems key={el.id} users={el} />
        ))}
      </ul>
      <Button className={styles.btn}>Show more</Button>
    </>
  );
};

export default OurUsersList;
