import React from 'react';
import styles from './App.module.scss';
import logo from "../../Assets/logo.svg"
import menu from "../../Assets/menu icon.svg"

function App() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.logo}><img src={logo}/></div>
                <nav className={styles.navigation}><a href={"#"}><img src={menu}/></a></nav>
            </header>
            <div className={styles.banner}>
                <div>
                    <h1 className={styles.title}>Test assignment for Frontend Developer position</h1>
                    <p className={styles.content}>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.</p>
                    <button>Sign up now</button>
                </div>
            </div>
        </div>
    );
}

export default App;
