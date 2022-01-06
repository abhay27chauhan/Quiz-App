import React from "react";

import styles from "./TopSubCard.module.scss";

function TopSubCard({ m, s, category }) {
    return (
        <div className={styles.top}>
            <div>
                <p className={styles.heading}>TOPIC</p>
                <p className={styles.info}>
                    {" "}
                    {category}
                </p>
            </div>
            <div className={styles.timer}>
                <div className={styles.timerLeft}>
                    <p>{m < 10 ? `0${m}` : m}</p>
                    <p>MIN</p>
                </div>
                <p>:</p>
                <div className={styles.timerRight}>
                    <p>{s < 10 ? `0${s}` : s}</p>
                    <p>SEC</p>
                </div>
            </div>
        </div>
    );
}

export default TopSubCard;
