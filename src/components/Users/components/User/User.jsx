/*Libraries*/
import React from "react";
import classes from "classnames";

/*Styles*/
import styles from "./user.module.scss";

/*Components*/
import photoCover from "assets/photo-cover.png";

const User = ({className, user}) => {
    return(
        <div className={classes(className, styles.wrapper)}>
            <img className={styles.userPhoto} src={user.photo || photoCover} alt={"user"}/>
            <ul className={styles.info}>
                <li className={styles.userName}><h2>{user.name}</h2></li>
                <li className={styles.userDetail}>{user.position}</li>
                <li className={styles.userDetail}>{user.email}</li>
                <li className={styles.userDetail}>{user.phone}</li>
            </ul>
        </div>
    );
}

export default User;