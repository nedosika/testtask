import React from "react";
import classNames from "classnames";

import styles from "./UploadFile.module.scss";

const UploadFile = ({children, photo, error}) =>
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
            {error && <span className={styles.errorMessage}>{error}</span>}
        </label>
    </div>

export default UploadFile;