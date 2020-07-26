import React from "react";
import classNames from "classnames";

import styles from "./register.module.scss";

const Register = () => {
    return(
        <section className={styles.wrapper} id={"register"}>
            <h2 className={styles.title}>Register to get a work</h2>
            <p className={styles.desc}>
                Attention! After successful registration and alert, update the list of users in the block from the
                top
            </p>
            <form className={styles.registerForm}>
                <label>Name
                    <input type={"text"} placeholder="Your name"/>
                </label>
                <label>Email
                    <input type={"email"} placeholder="Your email"/>
                </label>
                <label>Phone number
                    <input type={"phone"} placeholder="+380 XX XXX XX XX"/>
                    <span>Enter phone number in open format</span>
                </label>
                <div className={styles.inputPosition}>
                    <h3 className={styles.positionTitle}>Select your position</h3>
                    <label className={styles.container}>
                        <input type="radio" name="position" value="Frontend developer"/>Frontend developer
                        <span className={styles.checkMark}/>
                    </label>
                    <label className={styles.container}>
                        <input type="radio" name="position" value="Backend developer"/>Backend developer
                        <span className={styles.checkMark}/>
                    </label>
                    <label className={styles.container}>
                        <input type="radio" name="position" value="Designer"/>Designer
                        <span className={styles.checkMark}/>
                    </label>
                    <label className={styles.container}>
                        <input type="radio" name="position" value="QA"/>QA
                        <span className={styles.checkMark}/>
                    </label>
                </div>
                <div className={styles.file}>
                    <label className={styles.fileLabel}>Photo
                        <input className={styles.fileInput} type="file" name="resume"/>
                        <div className={styles.fileGroup}>
                                    <span className={styles.fileName}>
                                        Upload your photo
                                    </span>
                            <span className={styles.fileBtn}>
                                        Browse
                                    </span>
                        </div>
                    </label>
                </div>
                {/*<div className={styles.submitBtnWrapper}>*/}
                    <button className={classNames("btn", styles.btnSubmit)}>Sign up now</button>
                {/*</div>*/}
            </form>
        </section>
    );
}

export default Register;