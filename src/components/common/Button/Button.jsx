import React from "react";
import styles from "./Button.module.scss";

const button = ({ name }) => {
  return (
    <>
      <button className={styles.btn} type="button">
        {name}
      </button>
    </>
  );
};

export default button;
