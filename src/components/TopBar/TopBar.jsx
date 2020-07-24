/*Libraries*/
import React from "react";
import Scroll from "react-scrollchor";
import classNames from "classnames"

/*Styles*/
import styles from "./topBar.module.scss";

/*Assets*/
import menuIcon from "assets/menu icon.svg";

const TopBar = ({onOpenModal}) => {
    const [current, setCurrent] = React.useState("banner");

    const handleClick = (e) => {
        setCurrent(e.target.dataset.action);
    }

    return (
        <nav className={styles.wrapper}>
            <ul className={styles.menu} onClick={handleClick}>
                <li className={styles.menuItem}>
                    <Scroll
                        to="#about"
                        data-action={"about"}
                        className={classNames({[styles.action]: current === "about"})}
                    >
                        About me
                    </Scroll>
                </li>
                <li className={styles.menuItem}>
                    <Scroll
                        to="#register"
                        data-action={"relationships"}
                        className={classNames({[styles.action]: current === "relationships"})}
                    >
                        Relationships
                    </Scroll>
                </li>
                <li className={styles.menuItem}>
                    <Scroll
                        to="#register"
                        data-action={"requirements"}
                        className={classNames({[styles.action]: current === "requirements"})}
                    >
                        Requirements
                    </Scroll>
                </li>
                <li className={styles.menuItem}>
                    <Scroll
                        to="#users"
                        data-action={"users"}
                        className={classNames({[styles.action]: current === "users"})}
                    >
                        Users
                    </Scroll>
                </li>
                <li className={styles.menuItem}>
                    <Scroll
                        to="#register"
                        data-action={"register"}
                        className={classNames({[styles.action]: current === "register"})}
                    >
                        Sign Up
                    </Scroll>
                </li>
            </ul>
            <button onClick={onOpenModal}><img src={menuIcon} alt="menu"/></button>
        </nav>
    );
}

export default TopBar;