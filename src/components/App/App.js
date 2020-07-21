/*Libraries*/
import React from 'react';
import classes from 'classnames';

/*Assets*/
import man from "../../Assets/man-laptop-v1.svg";
import photoCover from "../../Assets/photo-cover.png"

/*Styles*/
import styles from './App.module.scss';
import Header from "../Header/Header";

const App = () => {
    return (
        <div className={styles.page}>
            <Header className={styles.wrapper}/>
            <main className={styles.mainContainer}>
                <section className={styles.banner}>
                    <div className={classes(styles.content, styles.wrapper)}>
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
                <sectiopn className={styles.users}>
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
                </sectiopn>
                <section className={styles.register}>
                    <h2>Register to get a work</h2>
                    <p>
                        Attention! After successful registration and alert, update the list of users in the block from the
                        top
                    </p>
                    <form>
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
                            <h3>Select your position</h3>
                            <label className={styles.container}>
                                <input type="radio" name="position" value="Frontend developer"/>Frontend developer
                                <span className={styles.checkMark}></span>
                            </label>
                            <label className={styles.container}>
                                <input type="radio" name="position" value="Backend developer"/>Backend developer
                                <span className={styles.checkMark}></span>
                            </label>
                            <label className={styles.container}>
                                <input type="radio" name="position" value="Designer"/>Designer
                                <span className={styles.checkMark}></span>
                            </label>
                            <label className={styles.container}>
                                <input type="radio" name="position" value="QA"/>QA
                                <span className={styles.checkMark}></span>
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
                        <div className={styles.submitBtnWrapper}>
                            <button>Sign up now</button>
                        </div>
                    </form>
                </section>
            </main>
            <hr noshade="" size="1" color="#f4f4f4"/>
            <footer className={styles.footer}>
                <span>&copy; abz.agency specially for the test task</span>
            </footer>
        </div>
    );
}

export default App;
