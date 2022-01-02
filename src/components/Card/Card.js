import React from "react";

import dots from "assets/dots.svg";
import dotsLong from "assets/dotsLong.svg";

import styles from "./Card.module.scss";

function Card({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {children}
            </div>
            <div className={styles.dots}>
                <img src={dots} alt="dots" />
            </div>
            <div className={styles.dotsLong}>
                <img src={dotsLong} alt="dots" />
            </div>
        </div>
    );
}

export default Card;
