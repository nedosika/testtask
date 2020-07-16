import React from 'react';
import styles from './App.module.scss';
import logo from "../../Assets/logo.svg";
import menu from "../../Assets/menu icon.svg";
import man from "../../Assets/man-laptop-v1.svg";
import user1 from "../../Assets/photo-cover.png"

function App() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.logo}><img src={logo} alt={"logo"}/></div>
                <nav className={styles.navigation}><a href={"#"}><img src={menu}/></a></nav>
            </header>
            <section className={styles.banner}>
                <div>
                    <h1 className={styles.title}>Test assignment for Frontend Developer position</h1>
                    <p className={styles.content}>We kindly remind you that your test assignment should be submitted as
                        a link to github/bitbucket repository.</p>
                    <button>Sign up now</button>
                </div>
            </section>
            <section className={styles.about}>
                <h2>Let's get acquainted</h2>
                <img src={man} alt={"about"}/>
                <h3>I am cool frontend developer</h3>
                <p>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.</p>
                <p>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.</p>
                <button>Sign up now</button>
            </section>
            <sectiopn className={styles.users}>
                <h2>Our cheerful users</h2>
                <p className={styles.message}>Attention! Sorting users by registration date</p>
                <div className={styles.userList}>
                    <div className={styles.user}>
                        <img src={user1} alt={"user"}/>
                        <div className={styles.info}>
                            <p className={styles.name}>Maximillian</p>
                            <p className={styles.details}>Leading specialist of the Control Department<br/>
                            controldepartment@gmail<br/>
                            +380 50 678 03 24</p>
                        </div>
                    </div>
                    <div className={styles.user}>
                        <img src={user1} alt={"user"}/>
                        <div className={styles.info}>
                            <p className={styles.name}>Adolph Blaine Charles David Earl Matthew Matthew</p>
                            <p className={styles.details}>Contextual advertizing specialist<br/>
                                adolph.blainecharles@...<br/>
                                +380 50 678 03 24</p>
                        </div>
                    </div>
                    <div className={styles.user}>
                        <img src={user1} alt={"user"}/>
                        <div className={styles.info}>
                            <p className={styles.name}>Elizabeth</p>
                            <p className={styles.details}>Frontend developer<br/>
                                controldepartment@gmail<br/>
                                +380 50 678 03 24</p>
                        </div>
                    </div>
                </div>
            </sectiopn>
        </div>
    );
}

export default App;
