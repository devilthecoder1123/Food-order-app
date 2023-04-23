import Image from "next/legacy/image";
import React from "react";
import styles from "../styles/Footer.module.css";
const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE JAMIAN PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
              Jamia Nagar, Okhla
            <br /> NewDelhi, 110025
            <br /> 6204001240
          </p>
          <p className={styles.text}>
              Shaheen Bagh, Thoker No-8
            <br /> NewDelhi, 110025
            <br /> 6204001240
          </p>
          <p className={styles.text}>
             Nehru Place ,Near Metro Station
            <br /> NewDelhi,110019
            <br /> 6204001240
          </p>
          <p className={styles.text}>
             Lajpat Nagar
            <br /> NewDelhi, 110024
            <br /> 6204001240
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00AM-11:00PM
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 7:00AM – 10:00PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
