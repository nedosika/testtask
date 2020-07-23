import React from "react";
import classes from "classnames";
import styles from "./sideBar.module.scss";

const SideBar = ({isOpen, toggle}) => {
    React.useEffect(() => {
        document.addEventListener("click", toggle);

        return () => {
            document.removeEventListener("click", toggle);
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