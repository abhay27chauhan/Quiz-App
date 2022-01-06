import { useEffect, useState } from "react";

function useTimer() {
    const [[m, s], setTimer] = useState([0, 0]);
    const [paused, setPaused] = useState(false);

    function tick() {
        if(paused) return;
        if (s < 59) {
            setTimer(([m, s]) => [m, s + 1]);
        } else {
            console.log(s);
            setTimer(([m, s]) => [m + 1, 0]);
        }
    }

    const reset = () => {
        setTimer([0, 0]);
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return [m, s, reset, setPaused];
}

export default useTimer;
