/*Libraries*/
import React from "react";
import classes from "classnames";

/*Assets*/
import photoCover from "../../Assets/photo-cover.png";

/*Styles*/
import styles from "./users.module.scss";
import User from "./components/User";

const users = [
    {
        name: "Maximillian",
        position: "Leading specialist of the Control Department",
        email: "controldepartment@gmail",
        phone: "+380 50 678 03 24",
    },
    {
        name: "Adolph Blaine Charles David Earl Matthew Matthew",
        position: "Contextual advertizing specialist",
        email: "adolph.blainecharles@...",
        phone: "+380 50 678 03 24",
    },
    {
        name: "Elizabeth",
        position: "Frontend developer",
        email: "elizabet.front@gmail.com",
        phone: "+380 50 678 03 24",
    },
    {
        name: "Alexander",
        position: "Leading specialist of the Control Department",
        email: "controldepartment@gmail",
        phone: "+380 50 678 03 24",
    },
    {
        name: "Noah",
        position: "Contextual advertizing specialist",
        email: "adolph.blainecharles@...",
        phone: "+380 50 678 03 24",
    },
    {
        name: "Liamgrievescasey",
        position: "Frontend developer",
        email: "elizabet.front@gmail.com",
        phone: "+380 50 678 03 24",
    }
]

const Users = ({className}) => {
    return(
        <section className={classes(styles.wrapper, className)}>
            <h2>Our cheerful users</h2>
            <p className={styles.message}>Attention! Sorting users by registration date</p>
            <div className={styles.userList}>
                {
                    users.map(user => <User className={styles.user} user={user}/>)
                }
            </div>
            <button>Show more</button>
        </section>
    );
}

export default Users;