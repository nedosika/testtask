import React from "react";
import classes from "classnames";

import styles from "./user.module.scss";
import photoCover from "Assets/photo-cover.png";

const User = ({className, user}) => {
    return(
        <div className={classes(className, styles.wrapper)}>
            <img src={user.photo || photoCover} alt={"user"}/>
            <div className={styles.info}>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.details}>
                    {user.position}<br/>
                    {user.email}<br/>
                    {user.phone}
                </p>
            </div>
        </div>
    );
}

export default User;