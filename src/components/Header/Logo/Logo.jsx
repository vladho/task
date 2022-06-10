import React from "react";
import { ReactComponent as Icon } from "../../../assets/Logo.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Icon />
    </div>
  );
};

export default Logo;
