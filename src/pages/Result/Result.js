import React from "react";

import Card from "components/Card/Card";
import { LinkButton } from "components/StyledComponent/Button";
import { useStateValue } from "context/StateProvider";

import styles from "./Result.module.scss";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { calAccuracy } from "utils/utils";

function Result() {
    const { totalQuestions, currentQuestion, correctCount } = useStateValue();
    const accuracy = calAccuracy(correctCount, totalQuestions);

    return currentQuestion === 0 || currentQuestion < totalQuestions - 1 ? (
        <Redirect to="/" />
    ) : (
        <Card>
            <div className={styles.subCard}>
                <div className={styles.top}>
                    <div className={styles.accuracy}>
                        <p className={styles.value}>{accuracy}%</p>
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
