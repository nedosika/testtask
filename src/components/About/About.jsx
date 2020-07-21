import React from "react";
import classes from "classnames";

import styles from "./about.module.scss";
import man from "Assets/man-laptop-v1.svg";

const About = ({className}) => {
    return (
        <section className={classes(styles.wrapper, className)}>
            <h2>Let's get acquainted</h2>
            <div className={styles.content}>
                <img src={man} alt={"about"}/>
                <div className={styles.info}>
                    <h3>I am cool frontend developer</h3>
                    <p>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any
                        CSS
                        and Javascript 3rd party libraries without any restriction.
                    </p>
                    <p>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get
                        bonus
                        points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice
                        service
                        directory page PSD mockup into HTML5/CSS3.
                    </p>
                    <button>Sign up now</button>
                </div>
            </div>
        </section>
    );
}

export default About;