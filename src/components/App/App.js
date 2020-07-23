/*Libraries*/
import React from 'react';

/*Components*/
import Header from "components/Header";
import Banner from "components/Banner";
import About from "components/About";
import Users from "components/Users";
import Register from "components/Register";
import Footer from "components/Footer";

/*Styles*/
import styles from './App.module.scss';
import SideBar from "../Header/components/SideBar/SideBar";

const App = () => {
    const [showModal, setShowModal] = React.useState(false);
    const toggleSideBar = (isOpen = true) => {
        console.log(isOpen)
        setShowModal(isOpen);
    }

    return (
        <>
            <Header className={styles.wrapper} openModal={toggleSideBar}/>
            <main className={styles.mainContainer}>
                <Banner className={styles.wrapper}/>
                <About className={styles.wrapper}/>
                <Users className={styles.wrapper}/>
                <Register/>
            </main>
            <hr noshade="" size="1" color="#f4f4f4"/>
            <Footer/>
            <SideBar isOpen={showModal} toggle={toggleSideBar}/>}
        </>
    );
}

export default App;
