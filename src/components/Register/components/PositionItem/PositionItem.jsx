import React from "react";
import styles from "./PositionItem.module.scss";

const PositionItem = ({children}) => {
    return (
        <label className={styles.wrapper}>
            {children}
            <span className={styles.checkMark}/>
        </label>
    );
}

export default PositionItem;