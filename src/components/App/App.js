/*Libraries*/
import React from 'react';

/*Assets*/
import man from "../../Assets/man-laptop-v1.svg";
import photoCover from "../../Assets/photo-cover.png"

/*Styles*/
import styles from './App.module.scss';
import Header from "../Header";
import Banner from "../Banner";
import About from "../About";
import Users from "../Users";

const App = () => {
    return (
        <>
            <Header className={styles.wrapper}/>
            <main className={styles.mainContainer}>
                <Banner className={styles.wrapper}/>
                <About/>
                <Users/>
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
        </>
    );
}

export default App;
