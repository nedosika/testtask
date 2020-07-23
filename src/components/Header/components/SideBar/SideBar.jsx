import React from "react";
import classes from "classnames";
import styles from "./sideBar.module.scss";

const SideBar = ({isOpen, toggle}) => {
    const closeModal = () => {
        toggle(false);
    }

    React.useEffect(() => {
        document.addEventListener("click", closeModal);

        return () => {
            document.removeEventListener("click", closeModal);
        }
    }, []);

    return isOpen && (
        <aside className={classes(styles.wrapper)}>
            <div className={styles.overlay}>
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
            </div>
        </aside>
    );
}

export default SideBar;