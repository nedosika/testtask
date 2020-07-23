import React from "react";
import classes from "classnames";

/*Assets*/
import styles from "./header.module.scss";

/*Styles*/
import logo from "Assets/logo.svg";

/*Components*/
import TopBar from "./components/TopBar";

const Header = ({className, openModal}) => {
    return (
        <header className={classes(styles.wrapper, className)}>
            <div className={styles.logo}>
                <a href={"#banner"}>
                    <img src={logo} alt={"logo"}/>
                </a>
            </div>
            <TopBar openModal={openModal}/>
        </header>
    );
}

export default Header;