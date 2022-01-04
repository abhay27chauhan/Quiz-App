import React from "react";

import Card from "components/Card/Card";
import url from "./endpoint";
import useFetch from "Hooks/useFetch/useFetch";
import { Button } from "components/StyledComponent/Button";

import styles from "./Quiz.module.scss";
import Loader from "components/Loader/Loader";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Quiz() {
    const [response, loading, error] = useFetch(url);
    console.log(response);

    return (
        <Card color="#FFFFFF">
            {loading && !error ? (
                <Loader size={50} />
            ) : !error ? (
                <div className={styles.quizContainer}>
                    <div className={styles.top}>
                        <div>
                            <p className={styles.heading}>TOPIC</p>
                            <p className={styles.info}>Product Mangement</p>
                        </div>
                        <div></div>
                    </div>
                    <div className={styles.middle}>
                        <div>
                            <p className={styles.heading}>QUESTION 1 of 6</p>
                            <p className={styles.question}>
                                The process of creating or improving a product
                                or service is refered to as
                            </p>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.bottomLeft}>
                            <p className={styles.heading}>ANSWER</p>
                            <input type="text" placeholder="Type Answer..." />
                        </div>
                        <div className={styles.bottomRight}>
                            <p className={styles.stuck}>Stuck ?</p>
                            <Button>See Solution</Button>
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
