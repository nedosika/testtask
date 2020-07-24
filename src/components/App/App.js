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
    const ModalRef = React.useRef({});

    return (
        <>
            <Header className={styles.wrapper} onOpenModal={() => ModalRef.current.open()}/>
            <main className={styles.mainContainer}>
                <Banner className={styles.wrapper}/>
                <About className={styles.wrapper}/>
                <Users className={styles.wrapper}/>
                <Register/>
            </main>
            <Modal ref={ModalRef}>
                <SideBar onApprove={() => ModalRef.current.close()}/>
            </Modal>
            <hr noshade="" size="1" color="#f4f4f4"/>
            <Footer/>
        </>
    );
}

export default App;
