import React from "react";
import classNames from "classnames";

import styles from "./UploadFile.module.scss";

const UploadFile = ({children, photo, errors}) =>
    <div className={styles.wrapper}>
        <label className={styles.fileLabel}>Photo
            {children}
            <div className={styles.fileGroup}>
                <span className={classNames(styles.fileName, photo || styles.placeholder)}>
                    {photo || "Upload your photo"}
                </span>
                <span className={styles.fileBtn}>
                    Browse
                </span>
            </div>
        </label>
        {errors && <span className={styles.errorMessage}>{errors.fails && errors.fails.photo}</span>}
    </div>

export default UploadFile;