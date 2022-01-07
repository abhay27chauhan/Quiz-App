import React from "react";

import Card from "components/Card/Card";
import { LinkButton } from "components/StyledComponent/Button";
import { useStateValue } from "context/StateProvider";

import styles from "./Result.module.scss";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { calAccuracy, calAverage } from "utils/utils";

function Result() {
    const { totalQuestions, currentQuestion, correctCount, timeTaken } = useStateValue();
    const accuracy = calAccuracy(correctCount, totalQuestions);
    const averageTime = calAverage(timeTaken)/totalQuestions;
    console.log(timeTaken);

    return currentQuestion === 0 || currentQuestion < totalQuestions - 1 ? (
        <Redirect to="/" />
    ) : (
        <Card style={{height: "34.2vh"}}>
            <div className={styles.subCard}>
                <div className={styles.top}>
                    <div className={styles.accuracy}>
                        <p className={styles.value}>{accuracy}%</p>
                        <p>Accuracy</p>
                    </div>
                    <div className={styles.avgTime}>
                        <p className={styles.value}>{Math.round(averageTime)}s</p>
                        <p>Avg Speed</p>
                    </div>
                </div>
                <LinkButton to="/">Play Again</LinkButton>
            </div>
        </Card>
    );
}

export default Result;
