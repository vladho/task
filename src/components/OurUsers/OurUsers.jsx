import React from "react";
import styles from "./OurUsers.module.scss";
import OurUsersList from "./OurUsersList/OurUsersList";

const OurUsers = () => {
  return (
    <>
      <h1 className={styles.title}>Working with GET request</h1>
      <OurUsersList />
    </>
  );
};

export default OurUsers;
