import React from "react";
import classes from "classnames";

import styles from "./about.module.scss";
import manLapTopSrc from "assets/man-laptop-v1.svg";

const About = ({className}) => {
    return (
        <section className={classes(styles.wrapper, className)} id={"about"}>
            <h2 className={styles.title}>Let's get acquainted</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={manLapTopSrc} alt={"about"}/>
                <article className={styles.article}>
                    <h3 className={styles.articleTitle}>I am cool frontend developer</h3>
                    <p className={styles.text}>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any
                        CSS
                        and Javascript 3rd party libraries without any restriction.
                    </p>
                    <p className={styles.text}>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get
                        bonus
                        points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice
                        service
                        directory page PSD mockup into HTML5/CSS3.
                    </p>
                    <button className={styles.btnSignUpNow}>Sign up now</button>
                </article>
            </div>
        </section>
    );
}

export default About;