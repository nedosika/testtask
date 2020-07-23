import React from "react";
import classNames  from "classnames";

/*Styles*/
import styles from "./Header.module.scss";

/*Assets*/
import logo from "Assets/logo.svg";

/*Components*/
import TopBar from "components/TopBar";

const Header = ({className, openModal}) => {
    return (
        <header className={classNames(styles.wrapper, className)}>
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