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
    }
]

const Users = ({className}) => {
    const [count, setCount] = React.useState(3);

    React.useEffect(() => {
        window.addEventListener("resize", (event) => {
            event.currentTarget.screen.width >= 768 && setCount(6);
            event.currentTarget.screen.width < 768 && setCount(3);
            //console.log(event.currentTarget.screen.width);
        });

        return () => window.removeEventListener("resize", (event) => {
            event.currentTarget.screen.width >= 768 && setCount(6);
            event.currentTarget.screen.width < 768 && setCount(3);
        });
    }, [])

    return(
        <section className={classes(styles.wrapper, className)}>
            <h2>Our cheerful users</h2>
            <p className={styles.message}>Attention! Sorting users by registration date</p>
            <div className={styles.userList}>
                {
                    users.map((user, i) =>
                        i < count &&
                        <>
                            <User user={user} key={user.id}/>
                            {(i + 1) % 3 === 0 && <div style={{width: "100%"}}></div>}
                        </>
                    )
                }
            </div>
            <button>Show more</button>
        </section>
    );
}

export default Users;