import React from "react";
import Button from "../../common/Button/Button";
import styles from "./ButtonGroup.module.scss";

const ButtonGroup = () => {
  return (
    <div className={styles.btnGroup}>
      <Button name="Users"></Button>
      <Button name="Sign Up"></Button>
    </div>
  );
};

export default ButtonGroup;
