/*Libraries*/
import React from 'react';

/*Components*/
import Header from "../Header";
import Banner from "../Banner";
import About from "../About";
import Users from "../Users";
import Register from "../Register";
import Footer from "../Footer";

/*Styles*/
import styles from './App.module.scss';

const App = () => {
    return (
        <>
            <Header className={styles.wrapper}/>
            <main className={styles.mainContainer}>
                <Banner className={styles.wrapper}/>
                <About/>
                <Users/>
                <Register/>
            </main>
            <hr noshade="" size="1" color="#f4f4f4"/>
            <Footer/>
        </>
    );
}

export default App;
