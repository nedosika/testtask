import React from "react";
import classNames from "classnames";

import styles from "./register.module.scss";
import PositionItem from "./components/PositionItem";
import UploadFile from "./components/UploadFile";

const positions = ["Frontend developer", "Backend developer", "Designer", "QA"];

const Register = () => {
    const [state, setState] = React.useState({});

    const handleChange = ({currentTarget: {name, value}}) => {
        setState(state => ({
            ...state,
            [name]: value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(state)
    }

    return (
        <section className={styles.wrapper} id={"register"}>
            <h2 className={styles.title}>Register to get a work</h2>
            <p className={styles.desc}>
                Attention! After successful registration and alert, update the list of users in the block from the
                top
            </p>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <label>Name
                    <input type={"text"} placeholder="Your name" name="name" value={state.name} onChange={handleChange}/>
                </label>
                <label>Email
                    <input type={"email"} placeholder="Your email" name="email" onChange={handleChange}/>
                </label>
                <label>Phone number
                    <input type={"phone"} placeholder="+380 XX XXX XX XX" name="phone" onChange={handleChange}/>
                    <span>Enter phone number in open format</span>
                </label>
                <div className={styles.inputPosition}>
                    <h3 className={styles.positionTitle}>Select your position</h3>
                    {positions.map((position) =>
                        <PositionItem>
                            <input type={"radio"} name={"position"} value={position} onChange={handleChange}/>{position}
                        </PositionItem>
                    )}
                </div>
                <UploadFile photo={state.photo}>
                    <input style={{display: "none"}} type="file" name="photo" onChange={handleChange}/>
                </UploadFile>
                <button className={classNames("btn", styles.btnSubmit)}>Sign up now</button>
            </form>
        </section>
    );
}

export default Register;