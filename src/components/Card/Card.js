import React from "react";

import dots from "assets/dots.svg";
import dotsLong from "assets/dotsLong.svg";
import useWindowResize from "Hooks/useWindowResize";

import styles from "./Card.module.scss";

function Card({ children, color }) {
    const windowWidth = useWindowResize();

    const isMobile = windowWidth < 800;

    return (
        <div className={styles.container}>
            <div className={styles.card} style={{ background: color }}>
                {children}
            </div>
            {!isMobile ? (
                <>
                    <div className={styles.dots}>
                        <img src={dots} alt="dots" />
                    </div>
                    <div className={styles.dotsLong}>
                        <img src={dotsLong} alt="dots" />
                    </div>
                </>
            ) : (
                <div className={styles.dotsMobile}>
                    <img src={dots} alt="dots" />
                </div>
            )}
        </div>
    );
}

export default Card;
