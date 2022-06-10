import React from "react";
import styles from "./HeaderWrapper.module.scss";

const HeaderWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default HeaderWrapper;
