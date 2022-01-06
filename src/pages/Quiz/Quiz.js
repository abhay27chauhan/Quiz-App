import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import Card from "components/Card/Card";
import url from "./endpoint";
import useFetch from "Hooks/useFetch/useFetch";
import Loader from "components/Loader/Loader";
import { useStateValue } from "context/StateProvider";
import useTimer from "Hooks/useTimer/useTimer";
import TopSubCard from "./TopSubCard/TopSubCard";
import QuestionCard from "./QuestionCard/QuestionCard";
import AnswerCard from "./AnswerCard/AnswerCard";

import styles from "./Quiz.module.scss";

function Quiz() {
    const [response, loading, error] = useFetch(url);
    const [m, s, reset, setPaused] = useTimer();
    const {
        currentQuestion,
        setTotalQuestions,
    } = useStateValue();

    useEffect(() => {
        setTotalQuestions(response?.length);
    }, [response]);

    return (
        <Card color="#FFFFFF">
            {loading && !error ? (
                <Loader size={50} />
            ) : !error ? (
                <div className={styles.quizContainer}>
                    <TopSubCard
                        m={m}
                        s={s}
                        category={response[currentQuestion].category}
                    />
                    <QuestionCard
                        question={response[currentQuestion].question}
                        quesNo={currentQuestion + 1}
                        total={response.length}
                    />
                    <AnswerCard
                        correctAnswer={response[currentQuestion].answer}
                        reset={reset}
                        setPaused={setPaused}
                        m={m}
                        s={s}
                        total={response.length}
                    />
                </div>
            ) : (
                <Redirect to="/" />
            )}
        </Card>
    );
}

export default Quiz;
