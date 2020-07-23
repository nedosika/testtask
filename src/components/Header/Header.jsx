import React from "react";
import classNames  from "classnames";

/*Styles*/
import styles from "./Header.module.scss";

/*assets*/
import logo from "assets/logo.svg";

/*Components*/
import TopBar from "components/TopBar";

const Header = ({className, onOpenModal}) => {
    return (
        <header className={classNames(styles.wrapper, className)}>
            <div className={styles.logo}>
                <a href={"#banner"}>
                    <img src={logo} alt={"logo"}/>
                </a>
            </div>
            <TopBar onOpenModal={onOpenModal}/>
        </header>
    );
}

export default Header;