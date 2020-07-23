/*Libraries*/
import React from 'react';

/*Components*/
import Header from "components/Header";
import Banner from "components/Banner";
import About from "components/About";
import Users from "components/Users";
import Register from "components/Register";
import Footer from "components/Footer";
import Modal from "components/Modal";
import SideBar from "components/SideBar";

/*Styles*/
import styles from './App.module.scss';

const App = () => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <Header className={styles.wrapper} openModal={() => setShowModal(true)}/>
            <main className={styles.mainContainer}>
                <Banner className={styles.wrapper}/>
                <About className={styles.wrapper}/>
                <Users className={styles.wrapper}/>
                <Register/>
                <Modal isOpen={showModal} close={() => setShowModal(false)}>
                    <SideBar/>
                </Modal>
            </main>
            <hr noshade="" size="1" color="#f4f4f4"/>
            <Footer/>
        </>
    );
}

export default App;
