import React from "react";

import styles from "./ToolTip.module.scss";

const ToolTip = ({children, text}) => {
    return (
        <div className={styles.tooltip}>
            {children}
            <span className={styles.tooltipText}>{text}</span>
        </div>
    );
}

export default ToolTip;