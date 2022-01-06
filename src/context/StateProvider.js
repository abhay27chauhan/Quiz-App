import React, { useState, useContext, createContext } from "react";

const StateContext = createContext();

function StateProvider({ children }) {
    const [correctCount, setCorretCount] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    const reset = () => {
        setCorretCount(0);
        setCurrentQuestion(0);
        setTotalQuestions(0);
    }
    const value = {
        correctCount,
        setCorretCount,
        currentQuestion,
        setCurrentQuestion,
        totalQuestions,
        setTotalQuestions,
        reset,
    };

    return (
        <StateContext.Provider value={value}>{children}</StateContext.Provider>
    );
}

export function useStateValue() {
    return useContext(StateContext);
}

export default StateProvider;
