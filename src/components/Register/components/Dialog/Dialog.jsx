import React from "react";
import classNames from "classnames";

import styles from "./Dialog.module.scss";

const Dialog = ({onClose}) =>
        <div className={styles.wrapper}>
            <div className={styles.dialog}>
                <div className={styles.title}>
                    <h2>Congratulations</h2>
                    <span onClick={onClose}>x</span>
                </div>
                <p className={styles.content}>You have successfully passed the registration</p>
                <button className={classNames("btn", styles.greatButton)} onClick={onClose}>Great</button>
            </div>
        </div>

export default Dialog;
