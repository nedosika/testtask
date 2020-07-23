import React from "react";
import styles from "./sideBar.module.scss";

const SideBar = () => {
    return (
        <aside className={styles.wrapper}>
            <ul>
                <li>
                    <a href={"#s"}>About</a>
                </li>
                <li>
                    <a href={"#s"}>About</a>
                </li>
                <li>
                    <a href={"#s"}>About</a>
                </li>
                <li>
                    <a href={"#s"}>About</a>
                </li>
                <li>
                    <a href={"#s"}>About</a>
                </li>
                <hr/>
                <li>
                    <a href={"#s"}>About</a>
                </li>
                <li>
                    <a href={"#s"}>About</a>
                </li>
                <li>
                    <a href={"#s"}>About</a>
                </li>
                <li>
                    <a href={"#s"}>About</a>
                </li>
                <li>
                    <a href={"#s"}>About</a>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;