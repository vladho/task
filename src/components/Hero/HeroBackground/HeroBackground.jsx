import React from "react";
import styles from "./HeroBackground.module.scss";

const HeroBackground = ({ children }) => {
  return <div className={styles.background}>{children}</div>;
};

export default HeroBackground;
