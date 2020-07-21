import React from "react";
import classes from "classnames";

/*Assets*/
import styles from "./header.module.scss";

/*Styles*/
import logo from "../../Assets/logo.svg";
import menu from "../../Assets/menu icon.svg";

const Header = ({className}) => {
    return(
        <header className={classes(styles.wrapper, className)}>
            <div className={styles.logo}><img src={logo} alt={"logo"}/></div>
            <nav className={styles.navigation}>
                <a href={"#"}><img src={menu} alt="menu"/></a>
            </nav>
        </header>
    );
}

export default Header;