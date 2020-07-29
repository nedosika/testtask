import React from "react";
import styles from "./UploadFile.module.scss";

const UploadFile = ({children, photo}) =>
    <div className={styles.wrapper}>
        <label className={styles.fileLabel}>Photo
            {children}
            <div className={styles.fileGroup}>
                <span className={styles.fileName}>
                    {photo || "Upload your photo"}
                </span>
                <span className={styles.fileBtn}>
                    Browse
                </span>
            </div>
        </label>
    </div>

export default UploadFile;