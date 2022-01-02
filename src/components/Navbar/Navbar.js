import React from "react";
import { Link } from "react-router-dom";

import logo from "assets/logo.svg";

import styles from "./Navbar.module.scss";

function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.right}>
                <ul>
                    <li>
                        <Link>Programs</Link>
                    </li>
                    <li>
                        <Link>Live Projects</Link>
                    </li>
                    <li>
                        <Link>Community</Link>
                    </li>
                    <li>
                        <Link>Jobs</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
