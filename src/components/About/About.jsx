import React from "react";
import styles from "../App/App.module.scss";
import man from "../../Assets/man-laptop-v1.svg";

const About  = () => {
    return(
        <section className={styles.about}>
            <h2>Let's get acquainted</h2>
            <img src={man} alt={"about"}/>
            <h3>I am cool frontend developer</h3>
            <p>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS
                and Javascript 3rd party libraries without any restriction.</p>
            <p>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus
                points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service
                directory page PSD mockup into HTML5/CSS3.</p>
            <button>Sign up now</button>
        </section>
    );
}

export default About;