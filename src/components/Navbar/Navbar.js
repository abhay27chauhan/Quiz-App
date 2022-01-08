import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "assets/logo.svg";
import useWindowResize from "Hooks/useWindowResize";
import hamburger from "assets/hamburger.svg";
import cross from "assets/cross.svg";

import styles from "./Navbar.module.scss";

function Navbar() {
    const windowWidth = useWindowResize();
    const isMobile = windowWidth < 800;
    const [showDropDown, setShowDropdown] = useState(false);

    return (
        <>
            <div
                className={styles.container}
                style={showDropDown ? { background: "#FFFFFF" } : {}}
            >
                <div className={styles.left}>
                    <img src={logo} alt="logo" />
                </div>
                {!isMobile ? (
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
                ) : (
                    <div className={styles.right}>
                        {!showDropDown ? (
                            <img
                                src={hamburger}
                                alt="hamburger"
                                onClick={() => setShowDropdown(true)}
                            />
                        ) : (
                            <img
                                src={cross}
                                alt="cross"
                                onClick={() => setShowDropdown(false)}
                            />
                        )}
                    </div>
                )}
            </div>
            {isMobile && (
                <div
                    className={
                        showDropDown
                            ? `${styles.dropdown} ${styles.show}`
                            : styles.dropdown
                    }
                >
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
            )}
        </>
    );
}

export default Navbar;
