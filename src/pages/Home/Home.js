import React from "react";

import { LinkButton } from "components/StyledComponent/Button";
import Card from "components/Card/Card";

function Home() {
    return (
        <Card>
            <LinkButton to="/quiz">Start Quiz</LinkButton>
        </Card>
    );
}

export default Home;
