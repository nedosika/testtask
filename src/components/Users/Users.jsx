/*Libraries*/
import React from "react";
import classNames from "classnames";

/*Styles*/
import styles from "./users.module.scss";

/*Components*/
import User from "./components/User";

const testData = [
    {
        id: 0,
        name: "Maximillian",
        position: "Leading specialist of the Control Department",
        email: "controldepartment@gmail",
        phone: "+380 50 678 03 24",
    },
    {
        id: 1,
        name: "Adolph Blaine Charles David Earl Matthew Matthew",
        position: "Contextual advertizing specialist",
        email: "adolph.blainecharles@...",
        phone: "+380 50 678 03 24",
    },
    {
        id: 2,
        name: "Elizabeth",
        position: "Frontend developer",
        email: "elizabet.front@gmail.com",
        phone: "+380 50 678 03 24",
    },
    {
        id: 3,
        name: "Alexander",
        position: "Leading specialist of the Control Department",
        email: "controldepartment@gmail",
        phone: "+380 50 678 03 24",
    },
    {
        id: 4,
        name: "Noah",
        position: "Contextual advertizing specialist",
        email: "adolph.blainecharles@...",
        phone: "+380 50 678 03 24",
    },
    {
        id: 5,
        name: "Liamgrievescasey",
        position: "Frontend developer",
        email: "elizabet.front@gmail.com",
        phone: "+380 50 678 03 24",
    },
    {
        id: 6,
        name: "Alexander",
        position: "Leading specialist of the Control Department",
        email: "controldepartment@gmail",
        phone: "+380 50 678 03 24",
    },
    {
        id: 7,
        name: "Noah",
        position: "Contextual advertizing specialist",
        email: "adolph.blainecharles@...",
        phone: "+380 50 678 03 24",
    },
    {
        id: 8,
        name: "Liamgrievescasey",
        position: "Frontend developer",
        email: "elizabet.front@gmail.com",
        phone: "+380 50 678 03 24",
    }
];

const options = {
    method: 'GET',
}

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
        fetch(
            `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`,
            {
                method: 'GET',
            })
            .then((result) => result.json())
            .then(data => {
                setState({
                    users: data.users,
                    total: data.total_users,
                    count: data.count
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