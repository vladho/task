import React from "react";
import styles from "./Button.module.scss";

const button = () => {
  return (
    <div className={styles.group}>
      <button className={styles.btn}>Users</button>
      <button className={styles.btn}>Sing up</button>
    </div>
  );
};

export default button;
