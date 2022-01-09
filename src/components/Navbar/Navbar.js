import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "assets/logo.svg";
import useWindowResize from "Hooks/useWindowResize";
import arrow from "assets/arrow.svg";
import arrowBig from "assets/arrowBig.svg";
import { MenuToggle } from "./MenuToggle";

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
                            <li className={styles.downArrow}>
                                <Link>Programs</Link>
                                <img src={arrow} alt="arrow"/>
                            </li>
                            <li className={styles.downArrow}>
                                <Link>Live Projects</Link>
                                <img src={arrow} alt="arrow"/>
                            </li>
                            <li>
                                <Link>Community</Link>
                            </li>
                            <li className={styles.downArrow}>
                                <Link>Jobs</Link>
                                <img src={arrow} alt="arrow"/>
                            </li>
                            <li>
                                <Link>About</Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className={styles.right}>
                        <MenuToggle isOpen={showDropDown} toggle={() => setShowDropdown(!showDropDown)} />
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
                        <li className={styles.downArrow}>
                            <Link>Programs</Link>
                            <img src={arrowBig} alt="arrow"/>
                        </li>
                        <li className={styles.downArrow}>
                            <Link>Live Projects</Link>
                            <img src={arrowBig} alt="arrow"/>
                        </li>
                        <li>
                            <Link>Community</Link>
                        </li>
                        <li className={styles.downArrow}>
                            <Link>Jobs</Link>
                            <img src={arrowBig} alt="arrow"/>
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
