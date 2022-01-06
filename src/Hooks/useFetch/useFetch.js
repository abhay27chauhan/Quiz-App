import { useReducer, useEffect } from "react";
import toast from "react-hot-toast";

import initialState from "./initialState";
import fetchReducer from "./fetchReducer";

const useFetch = (url) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        dispatch({ type: "LOADING" });

        const fetchUrl = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if(data.status === "success"){
                    toast.success("Quiz Started")
                }
                dispatch({
                    type: "RESPONSE_COMPLETE",
                    payload: { response: data.task_array },
                });
            } catch (error) {
                toast.error("Something went wrong!!")
                dispatch({ type: "ERROR", payload: { error } });
            }
        };

        fetchUrl();
    }, []);

    return [state.result, state.loading, state.error];
};


export default useFetch;