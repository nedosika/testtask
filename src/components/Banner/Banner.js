import React from "react";

import styles from "./home.module.scss";

const Home = () => {
    return(
        <section className={styles.wrapper}>
            <div>
                <h1>test assigment for frontend developer</h1>
                <p>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner are on the different screens</p>
                <div><button>Sign up now</button></div>
            </div>
        </section>
    );
}

export default Home;