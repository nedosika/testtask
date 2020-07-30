import React from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";

const Input = ({label, handleChange, name, value, placeholder, error}) =>
    <label className={styles.wrapper}>{label}
        <input
            className={classNames(styles.item, error && styles.error)}
            type={"text"}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
    </label>

export default Input;