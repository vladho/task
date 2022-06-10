import React from "react";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import ButtonGroup from "./ButtonGroup/ButtonGroup";

const Header = () => {
  return (
    <header className={styles.group}>
      <Logo />
      <ButtonGroup />
    </header>
  );
};

export default Header;
