import React from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";

const Input = ({label, handleChange, name, value, placeholder, errors}) =>
    <label className={styles.wrapper}>{label}
        <input
            className={classNames(styles.item, errors && errors.fails && styles.error)}
            type={"text"}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
        />
        {errors && <span className={styles.errorMessage}>{errors.fails && errors.fails[name]}</span>}
    </label>

export default Input;