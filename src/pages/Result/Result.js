import React from "react";

import Card from "components/Card/Card";
import { LinkButton } from "components/StyledComponent/Button";

import styles from "./Result.module.scss";

function Result() {
    return (
        <Card>
            <div className={styles.subCard}>
                <div className={styles.top}>
                    <div className={styles.accuracy}>
                        <p className={styles.value}>75%</p>
                        <p>Accuracy</p>
                    </div>
                    <div className={styles.avgTime}>
                        <p className={styles.value}>4.3s</p>
                        <p>Avg Speed</p>
                    </div>
                </div>
                <LinkButton to="/">Play Again</LinkButton>
            </div>
        </Card>
    );
}

export default Result;
