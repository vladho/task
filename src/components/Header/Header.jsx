import React from "react";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Button from "./Button/Button";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Button />
    </div>
  );
};

export default Header;
