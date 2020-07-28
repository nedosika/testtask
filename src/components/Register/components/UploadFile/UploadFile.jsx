import React from "react";
import styles from "./UploadFile.module.scss";

const UploadFile = ({children, photo = "Upload your photo"}) =>
    <div className={styles.wrapper}>
        <label className={styles.fileLabel}>Photo
            {children}
            <div className={styles.fileGroup}>
                <span className={styles.fileName}>
                    {photo}
                </span>
                <span className={styles.fileBtn}>
                    Browse
                </span>
            </div>
        </label>
    </div>

export default UploadFile;