import React from "react";
/*styles*/
import styles from "./SideBar.module.scss";

/*assets*/
import logo from "assets/logo.svg";

const SideBar = ({onApprove}) => {
    return (
        <section className={styles.wrapper}>
            <header>
                <a href={"#banner"}>
                    <img src={logo} alt={"logo"}/>
                </a>
            </header>
            <hr noshade="" size="1" color="#f4f4f4"/>
            <nav>
                <ul onClick={onApprove}>
                    <li>
                        <a href={"#s"}>About me</a>
                    </li>
                    <li>
                        <a href={"#s"}>Relationships</a>
                    </li>
                    <li>
                        <a href={"#s"}>Users</a>
                    </li>
                    <li>
                        <a href={"#s"}>Sign Up</a>
                    </li>
                    <li>
                        <a href={"#s"}>Terms and Conditions</a>
                    </li>
                </ul>
            </nav>
            <hr noshade="" size="1" color="#f4f4f4"/>
            <nav>
                <ul>
                    <li>
                        <a href={"#s"}>How it works</a>
                    </li>
                    <li>
                        <a href={"#s"}>Partnership</a>
                    </li>
                    <li>
                        <a href={"#s"}>Help</a>
                    </li>
                    <li>
                        <a href={"#s"}>Leave testimonial</a>
                    </li>
                    <li>
                        <a href={"#s"}>Contact us</a>
                    </li>
                </ul>
            </nav>
            <hr noshade="" size="1" color="#f4f4f4"/>
            <nav>
                <ul>
                    <li>
                        <a href={"#s"}>Articles</a>
                    </li>
                    <li>
                        <a href={"#s"}>Our news</a>
                    </li>
                    <li>
                        <a href={"#s"}>Testimonial</a>
                    </li>
                    <li>
                        <a href={"#s"}>Licenses</a>
                    </li>
                    <li>
                        <a href={"#s"}>Privacy Policy</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default SideBar;