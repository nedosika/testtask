import React from "react";
/*styles*/
import styles from "./SideBar.module.scss";

/*Assets*/
import logo from "Assets/logo.svg";

const SideBar = () => {
    return (
        <aside className={styles.wrapper}>
            <header>
                <a href={"#banner"}>
                    <img src={logo} alt={"logo"}/>
                </a>
            </header>
            <hr/>
            <nav>
                <ul>
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
            <hr/>
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
            <hr/>
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
        </aside>
    );
}

export default SideBar;