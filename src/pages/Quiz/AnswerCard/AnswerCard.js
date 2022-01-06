import React, { useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

import { useStateValue } from "context/StateProvider";
import { Button } from "components/StyledComponent/Button";

import styles from "./AnswerCard.module.scss";

function AnswerCard({
    setPaused,
    total,
    reset,
    m, s,
    correctAnswer
}) {

    const {
        setCorretCount,
        currentQuestion,
        setCurrentQuestion,
        setTimeTaken,
    } = useStateValue();

    const history = useHistory();
    const [answer, setAnswer] = useState("");
    const [inputDisabled, setInputDisabled] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

    function doIfKeyIsEnter(e, correctAnswer) {
        if (e.key === "Enter" && answer.trim() !== "") {
            setInputDisabled(true);
            setPaused(true);
            const isCorrect = correctAnswer
                .toLowerCase()
                .includes(answer.trim().toLowerCase());
            if (isCorrect) {
                toast.success("Correct Answer!!");
                !showAnswer && setCorretCount((state) => state + 1);
            } else {
                toast.error("Wrong Answer!!");
            }
            setAnswer("");
            setTimeTaken((state) => [...state, m * 60 + s]);
            reset();
            currentQuestion < total - 1
                ? setCurrentQuestion(currentQuestion + 1)
                : history.push("/result");
            setPaused(false);
            setShowAnswer(false);
            setInputDisabled(false);
        } else if (e.key === "Enter" && answer.trim() == "") {
            toast.error("Type answer before submitting!!");
        }
    }
    return (
        <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
                <p className={styles.heading}>ANSWER</p>
                <input
                    type="text"
                    disabled={inputDisabled}
                    value={answer}
                    placeholder="Type Answer..."
                    onChange={(e) => setAnswer(e.target.value)}
                    onKeyDown={(e) =>
                        doIfKeyIsEnter(e, correctAnswer)
                    }
                />
            </div>
            <div className={styles.bottomRight}>
                {!showAnswer ? (
                    <>
                        <p className={styles.stuck}>Stuck ?</p>
                        <Button onClick={() => setShowAnswer(true)}>
                            See Solution
                        </Button>
                    </>
                ) : (
                    <p className={styles.heading}>
                        {correctAnswer}
                    </p>
                )}
            </div>
        </div>
    );
}

export default AnswerCard;
