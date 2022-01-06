import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import Card from "components/Card/Card";
import url from "./endpoint";
import useFetch from "Hooks/useFetch/useFetch";
import { Button } from "components/StyledComponent/Button";
import Loader from "components/Loader/Loader";
import { useStateValue } from "context/StateProvider";
import useTimer from "Hooks/useTimer/useTimer";

import styles from "./Quiz.module.scss";

function Quiz() {
    const history = useHistory();
    const [response, loading, error] = useFetch(url);
    const [m, s, reset, setPaused] = useTimer();

    const [answer, setAnswer] = useState("");
    const [inputDisabled, setInputDisabled] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const {
        setCorretCount,
        currentQuestion,
        setCurrentQuestion,
        setTotalQuestions,
        setTimeTaken,
    } = useStateValue();

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
            currentQuestion < response.length - 1
                ? setCurrentQuestion(currentQuestion + 1)
                : history.push("/result");
            setTimeTaken((state) => [...state, m*60 + s])
            reset();
            setPaused(false);
            setShowAnswer(false);
            setInputDisabled(false);
        } else if (e.key === "Enter" && answer.trim() == "") {
            toast.error("Type answer before submitting!!");
        }
    }

    useEffect(() => {
        setTotalQuestions(response?.length);
    }, [response]);

    return (
        <Card color="#FFFFFF">
            {loading && !error ? (
                <Loader size={50} />
            ) : !error ? (
                <div className={styles.quizContainer}>
                    <div className={styles.top}>
                        <div>
                            <p className={styles.heading}>TOPIC</p>
                            <p className={styles.info}>
                                {" "}
                                {response[currentQuestion].category}
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
                    <div className={styles.middle}>
                        <div>
                            <p className={styles.heading}>
                                QUESTION {currentQuestion + 1} of{" "}
                                {response.length}
                            </p>
                            <p className={styles.question}>
                                {response[currentQuestion].question}
                            </p>
                        </div>
                    </div>
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
                                    doIfKeyIsEnter(
                                        e,
                                        response[currentQuestion].answer,
                                    )
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
                                    {response[currentQuestion].answer}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <Redirect to="/" />
            )}
        </Card>
    );
}

export default Quiz;
