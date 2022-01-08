import useWindowResize from "Hooks/useWindowResize";
import React, { useEffect } from "react";

import styles from "./QuestionCard.module.scss";

function QuestionCard({ quesNo, total, response }) {
    const windowWidth = useWindowResize();

    useEffect(() => {
        console.log(quesNo);
        if (quesNo == 1) {
            return;
        }
        let pElem = document.getElementById(`${quesNo}`);
        pElem.parentElement.style.overflow = "auto";
        pElem.scrollIntoView({ behavior: "smooth" });
        pElem.parentElement.style.overflow = "hidden";
    }, [quesNo]);

    return (
        <div className={styles.middle}>
            <div>
                <p className={styles.heading}>
                    QUESTION {quesNo} of {total}
                </p>
                <div className={styles.questions}>
                    {response.map((question) => (
                        <p
                            id={question._id}
                            key={question._id}
                            className={styles.question}
                        >
                            {question.question}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;
