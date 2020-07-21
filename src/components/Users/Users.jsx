/*Libraries*/
import React from "react";

/*Assets*/
import photoCover from "../../Assets/photo-cover.png";

/*Styles*/
import styles from "./users.module.scss";

const Users = () => {
    return(
        <section className={styles.wrapper}>
            <h2>Our cheerful users</h2>
            <p className={styles.message}>Attention! Sorting users by registration date</p>
            <div className={styles.userList}>
                <div className={styles.user}>
                    <img src={photoCover} alt={"user"}/>
                    <div className={styles.info}>
                        <p className={styles.name}>Maximillian</p>
                        <p className={styles.details}>Leading specialist of the Control Department<br/>
                            controldepartment@gmail<br/>
                            +380 50 678 03 24</p>
                    </div>
                </div>
                <div className={styles.user}>
                    <img src={photoCover} alt={"user"}/>
                    <div className={styles.info}>
                        <p className={styles.name}>Adolph Blaine Charles David Earl Matthew Matthew</p>
                        <p className={styles.details}>Contextual advertizing specialist<br/>
                            adolph.blainecharles@...<br/>
                            +380 50 678 03 24</p>
                    </div>
                </div>
                <div className={styles.user}>
                    <img src={photoCover} alt={"user"}/>
                    <div className={styles.info}>
                        <p className={styles.name}>Elizabeth</p>
                        <p className={styles.details}>Frontend developer<br/>
                            controldepartment@gmail<br/>
                            +380 50 678 03 24</p>
                    </div>
                </div>
            </div>
            <button>Show more</button>
        </section>
    );
}

export default Users;