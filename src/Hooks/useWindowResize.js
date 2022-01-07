import { useLayoutEffect, useState } from "react";

function useWindowResize() {
    const [windowWidth, setWindowWidth] = useState(window.outerWidth);

    function updateWidth() {
        setWindowWidth(window.outerWidth);
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return windowWidth;
}

export default useWindowResize;
