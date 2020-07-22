import React from "react";

import styles from "./topBar.module.scss";

import menuIcon from "Assets/menu icon.svg";

const TopBar = () => {
    return(
        <nav className={styles.wrapper}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}><a href={"#about"}>About me</a></li>
                <li className={styles.menuItem}><a href={"#register"}>Relationships</a></li>
                <li className={styles.menuItem}><a href={"#register"}>Requirements</a></li>
                <li className={styles.menuItem}><a href={"#users"}>Users</a></li>
                <li className={styles.menuItem}><a href={"#register"}>Sign Up</a></li>
            </ul>
            <button><img src={menuIcon} alt="menu"/></button>
        </nav>
    );
}

export default TopBar;