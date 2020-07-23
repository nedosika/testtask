import React from "react";
import classes from "classnames";

import styles from "./Banner.module.scss";

const Banner = ({className}) => {
    return(
        <section className={styles.wrapper} id={"banner"}>
            <div className={classes(styles.content, className)}>
                <h1>test assignment for Frontend Developer position</h1>
                <p>
                    <span>We kindly remind you that your test assignment should be submitted as
                        a link to github/bitbucket repository.
                    </span>
                    <span className={styles.crop}> Please be patient, we consider
                        and respond to every application that meets minimum requirements. We
                        look forward to your submission. Good luck! The photo has to scale in
                        the banner area on the different screens
                    </span>
                </p>
                <button>Sign up now</button>
            </div>
        </section>
    );
}

export default Banner;