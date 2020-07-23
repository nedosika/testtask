import React from "react";
import Scrollchor from "react-scrollchor";

import styles from "./topBar.module.scss";

import menuIcon from "Assets/menu icon.svg";

const TopBar = () => {
    const [current, setCurrent] = React.useState("banner");

    const handleClick = (e) => {
        setCurrent(e.target.dataset.action);
    }

    return (
        <nav className={styles.wrapper}>
            <ul className={styles.menu} onClick={handleClick}>
                <li className={styles.menuItem}>
                    <Scrollchor
                        to="#about"
                        data-action={"about"}
                        className={current === "about" && styles.action}
                    >
                        About me
                    </Scrollchor>
                </li>
                <li className={styles.menuItem}>
                    <Scrollchor
                        to="#register"
                        data-action={"relationships"}
                        className={current === "relationships" && styles.action}
                    >
                        Relationships
                    </Scrollchor>
                </li>
                <li className={styles.menuItem}>
                    <Scrollchor
                        to="#register"
                        data-action={"requirements"}
                        className={current === "requirements" && styles.action}
                    >
                        Requirements
                    </Scrollchor>
                </li>
                <li className={styles.menuItem}>
                    <Scrollchor
                        to="#users"
                        data-action={"users"}
                        className={current === "users" && styles.action}
                    >
                        Users
                    </Scrollchor>
                </li>
                <li className={styles.menuItem}>
                    <Scrollchor
                        to="#register"
                        data-action={"register"}
                        className={current === "register" && styles.action}
                    >
                        Sign Up
                    </Scrollchor>
                </li>
            </ul>
            <button><img src={menuIcon} alt="menu"/></button>
        </nav>
    );
}

export default TopBar;