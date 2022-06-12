import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children }) => {
  return (
    <>
      <button className={styles.btn} type="button">
        {children}
      </button>
    </>
  );
};

export default Button;
