import React, { useEffect } from "react";

import { LinkButton } from "components/StyledComponent/Button";
import Card from "components/Card/Card";
import { useStateValue } from "context/StateProvider";

function Home() {
    const { reset } = useStateValue();

    useEffect(() => {
        reset();
    }, []);

    return (
        <Card style={{height: "34.2vh"}}>
            <LinkButton to="/quiz">Start Quiz</LinkButton>
        </Card>
    );
}

export default Home;
