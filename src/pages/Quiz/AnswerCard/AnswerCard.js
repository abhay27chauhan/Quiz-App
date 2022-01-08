import React, { useState, useEffect, useRef } from "react";
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

    const wrongRef = useRef();
    const correctRef = useRef();

    function runAfterAnimationEnd() {
        isCorrect ? setIsCorrect(false) : setIsWrong(false);
        currentQuestion < total - 1
            ? setCurrentQuestion(currentQuestion + 1)
            : history.push("/result");

        setTimeout(resetTheState, 1000);
    }

    function resetTheState() {
        reset();
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
        } else if (e.key === "Enter" && answer.trim() == "") {
            toast.error("Type answer before submitting!!");
        }
    }

    useEffect(() => {
        const wrongImage = wrongRef.current;
        const correctImage = correctRef.current;
        if (!wrongImage && !correctImage) return;
        isWrong &&
            wrongImage.addEventListener("animationend", runAfterAnimationEnd);
        isCorrect &&
            correctImage.addEventListener("animationend", runAfterAnimationEnd);

        return () => {
            wrongImage &&
                wrongImage.removeEventListener(
                    "animationend",
                    runAfterAnimationEnd,
                );
            correctImage &&
                correctImage.addEventListener(
                    "animationend",
                    runAfterAnimationEnd,
                );
        };
    }, [isCorrect, isWrong]);

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
                {!showAnswer && !inputDisabled ? (
                    <>
                        <p className={styles.stuck}>Stuck ?</p>
                        <Button onClick={() => setShowAnswer(true)}>
                            See Solution
                        </Button>
                    </>
                ) : !inputDisabled ? (
                    <p className={styles.heading}>{correctAnswer}</p>
                ) : (
                    ""
                )}
            </div>
        </div>
    ) : isCorrect ? (
        <div className={styles.correct}>
            <img
                ref={correctRef}
                className={`${styles.animate} ${styles.rotate}`}
                src={correct}
                alt="correct"
            />
        </div>
    ) : (
        <div className={styles.wrong}>
            <img
                ref={wrongRef}
                className={`${styles.animate} ${styles.shakeX}`}
                src={wrong}
                alt="wrong"
            />
        </div>
    );
}

export default AnswerCard;
