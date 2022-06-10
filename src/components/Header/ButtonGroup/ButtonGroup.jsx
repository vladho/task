import React from "react";
import Button from "../../common/Button/Button";
import styles from "./ButtonGroup.module.scss";

const ButtonGroup = () => {
  return (
    <div className={styles.btnGroup}>
      <Button>Users</Button>
      <Button>Sign Up</Button>
    </div>
  );
};

export default ButtonGroup;
