import React, { useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

import { useStateValue } from "context/StateProvider";
import { Button } from "components/StyledComponent/Button";
import correct from "assets/correct.svg";
import wrong from "assets/wrong.svg";

import styles from "./AnswerCard.module.scss";

function AnswerCard({ setPaused, total, reset, m, s, correctAnswer }) {
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
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrong, setIsWrong] = useState(false);

    function resetAfterUserAnswer(currentQuestion, total, isCorrect) {
        reset();
        currentQuestion < total - 1
            ? setCurrentQuestion(currentQuestion + 1)
            : history.push("/result");
        isCorrect ? setIsCorrect(false) : setIsWrong(false);
        setPaused(false);
        setShowAnswer(false);
        setInputDisabled(false);
    }

    function doIfKeyIsEnter(e, correctAnswer) {
        if (e.key === "Enter" && answer.trim() !== "") {
            setInputDisabled(true);
            setPaused(true);
            const isCorrect = correctAnswer
                .toLowerCase()
                .includes(answer.trim().toLowerCase());
            if (isCorrect) {
                setIsCorrect(true);
                !showAnswer && setCorretCount((state) => state + 1);
            } else {
                setIsWrong(true);
            }
            setAnswer("");
            setTimeTaken((state) => [...state, m * 60 + s]);
            setTimeout(() => resetAfterUserAnswer(currentQuestion, total, isCorrect), 1000);
        } else if (e.key === "Enter" && answer.trim() == "") {
            toast.error("Type answer before submitting!!");
        }
    }
    return !isCorrect && !isWrong ? (
        <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
                <p className={styles.heading}>ANSWER</p>
                <input
                    type="text"
                    disabled={inputDisabled}
                    value={answer}
                    placeholder="Type Answer..."
                    onChange={(e) => setAnswer(e.target.value)}
                    onKeyDown={(e) => doIfKeyIsEnter(e, correctAnswer)}
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
                    <p className={styles.heading}>{correctAnswer}</p>
                )}
            </div>
        </div>
    ) : isCorrect ? (
        <div className={styles.correct}>
            <img
                className={`${styles.animate} ${styles.rotate}`}
                src={correct}
                alt="correct"
            />
        </div>
    ) : (
        <div className={styles.wrong}>
            <img
                className={`${styles.animate} ${styles.shakeX}`}
                src={wrong}
                alt="wrong"
            />
        </div>
    );
}

export default AnswerCard;
