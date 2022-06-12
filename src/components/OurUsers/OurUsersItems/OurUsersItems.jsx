import React from "react";
import styles from "./OurUsersItems.module.scss";

const OurUsersItems = ({ users }) => {
  const {
    email,
    name,
    phone,
    photo,
    position,
    position_id,
    registration_timestamp,
  } = users;

  //   console.log(photo);
  return (
    <>
      <li className={styles.item}>
        <img src={photo} alt="usesr photo" className={styles.photo} />
        <h3 className={styles.name}> {name}</h3>
        <p className={styles.position}> {position}</p>
        <p className={styles.email}> {email}</p>
        <p className={styles.phone}> {phone}</p>

        {/* <p className={styles.contact}>
          {position}
          {email}
          {phone}
        </p> */}

        {/* <p className={styles.position_id}> {position_id}</p>
        <p className={styles.registration_timestamp}>
          {registration_timestamp}
        </p> */}
      </li>
    </>
  );
};

export default OurUsersItems;
