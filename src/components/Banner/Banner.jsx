import React from "react";
import classNames from "classnames";

import styles from "./Banner.module.scss";

const Banner = () => {
    return (
        <section className={styles.wrapper} id={"banner"}>
            <h1 className={styles.title}>test assignment for Frontend Developer position</h1>
            <p className={styles.text}>
                <span>We kindly remind you that your test assignment should be submitted as
                    a link to github/bitbucket repository.
                </span>
                <span className={styles.crop}> Please be patient, we consider
                        and respond to every application that meets minimum requirements. We
                        look forward to your submission. Good luck! The photo has to scale in
                        the banner area on the different screens
                </span>
            </p>
            <button className={classNames("btn", styles.btnOuter)}>Sign up now</button>
        </section>
    );
}

export default Banner;