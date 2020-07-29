/*Libraries*/
import React from "react";
import classNames from "classnames";

/*Styles*/
import styles from "./users.module.scss";

/*Components*/
import User from "./components/User";
import userService from "services";

const Users = ({className}) => {
    const [state, setState] = React.useState({
        users: [],
        count: 0,
        total: 0
    });

    const handleScreenResize = (event) => {
        event.currentTarget.screen.width >= 768 && loadUsers(6);
        event.currentTarget.screen.width < 768 && loadUsers();
    };

    const loadUsers = (count = 3) => {
        userService.getUsers(count)
        .then(({users, total_users: total, count}) => {
            setState({
                users,
                total,
                count
            });
        });
    }

    React.useEffect(() => {
        loadUsers();
        window.addEventListener("resize", handleScreenResize);

        return () => window.removeEventListener("resize", handleScreenResize)
    }, []);

    const handleShowMore = () => {
        loadUsers(state.count + 3);
    };

    return(
        <section className={classNames(styles.wrapper, className)} id={"users"}>
            <h2 className={styles.title}>Our cheerful users</h2>
            <p className={styles.message}>Attention! Sorting users by registration date</p>
            <div className={styles.userList}>
                {
                    state.users.map((user, i) =>
                        i < state.count &&
                        <React.Fragment key={user.id}>
                            <User user={user} />
                            {
                                (i + 1) % 3 === 0 && <div style={{width: "100%"}}/>
                            }
                        </React.Fragment>
                    )
                }
            </div>
            {
                state.count < state.total  && <button className={classNames("btn", styles.btnShowMore)} onClick={handleShowMore}>Show more</button>
            }
        </section>
    );
};

export default Users;