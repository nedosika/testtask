/*Libraries*/
import React from "react";
import classes from "classnames";

/*Components*/
import ToolTip from "components/ToolTip";

/*Styles*/
import styles from "./user.module.scss";


import photoCover from "assets/photo-cover.png";

const User = ({className, user}) => {
    return (
        <div className={classes(className, styles.wrapper)}>
            <img className={styles.userPhoto} src={user.photo || photoCover} alt={"user"}/>
                <ul className={styles.info}>
                    <ToolTip text={user.name}>
                        <li className={styles.userName}>
                            <h2>{user.name}</h2>
                        </li>
                    </ToolTip>
                    <ToolTip text={user.position}>
                        <li className={styles.userDetail}>{user.position}</li>
                    </ToolTip>
                    <ToolTip text={user.email}>
                        <li className={styles.userDetail}>{user.email}</li>
                    </ToolTip>
                    <ToolTip text={user.phone}>
                        <li className={styles.userDetail}>{user.phone}</li>
                    </ToolTip>
                </ul>
        </div>
    );
}

export default User;