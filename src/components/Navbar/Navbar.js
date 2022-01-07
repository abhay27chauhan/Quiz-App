import React from "react";
import { Link } from "react-router-dom";

import logo from "assets/logo.svg";
import useWindowResize from "Hooks/useWindowResize";
import hamburger from "assets/hamburger.svg";

import styles from "./Navbar.module.scss";

function Navbar() {
    const windowWidth = useWindowResize();

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.right}>
                {windowWidth > 800 ? (
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
                ) : (
                    <img src={hamburger} alt="hamburger" />
                )}
            </div>
        </div>
    );
}

export default Navbar;
