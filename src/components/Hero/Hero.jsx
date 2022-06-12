import React from "react";
import Button from "../common/Button/Button";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h2 className={styles.title}>Test assignment for front-end developer</h2>
      <p className={styles.text}>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Button>Sign up</Button>
    </div>
  );
};

export default Hero;
