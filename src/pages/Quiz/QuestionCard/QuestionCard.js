import React from "react";

import styles from "./QuestionCard.module.scss";

function QuestionCard({ question, quesNo, total }) {
    return (
        <div className={styles.middle}>
            <div>
                <p className={styles.heading}>
                    QUESTION {quesNo} of {total}
                </p>
                <p className={styles.question}>
                    {question}
                </p>
            </div>
        </div>
    );
}

export default QuestionCard;
