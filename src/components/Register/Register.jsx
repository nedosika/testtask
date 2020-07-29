import React from "react";
import classNames from "classnames";

import userService from "services";

import PositionItem from "./components/PositionItem";
import UploadFile from "./components/UploadFile";

import styles from "./register.module.scss";

const Register = () => {
    const [user, setUser] = React.useState({
        photo: "",
    });
    const [positions, setPositions] = React.useState([]);
    const [errors, setErrors] = React.useState({});

    const handleChange = (event) => {
        event.preventDefault();
        const {currentTarget: {name, value}} = event;

        setUser(state => ({
            ...state,
            [name]: value
        }))
    }

    React.useEffect(() => {
        userService
            .getPositions()
            .then(({positions}) => setPositions(positions));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        userService
            .getToken()
            .then(() => userService
                .register(user)
                .then(log => console.log(log))
                .catch(setErrors))
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
                    <input
                        type={"text"}
                        placeholder="Your name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </label>
                <label>Email
                    <input
                        type={"email"}
                        placeholder="Your email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </label>
                <label>Phone number
                    <input
                        type={"phone"}
                        placeholder="+380 XX XXX XX XX"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                    />
                    <span>Enter phone number in open format</span>
                </label>
                <div className={styles.inputPosition}>
                    <h3 className={styles.positionTitle}>Select your position</h3>
                    {positions.map((position) =>
                        <PositionItem key={position.id}>
                            <input type={"radio"} name={"position_id"} value={position.id}
                                   onChange={handleChange}/>{position.name}
                        </PositionItem>
                    )}
                </div>
                <UploadFile photo={user.photo}>
                    <input style={{display: "none"}} type="file" name="photo" onChange={handleChange}/>
                </UploadFile>
                <button className={classNames("btn", styles.btnSubmit)}>Sign up now</button>
            </form>
        </section>
    );
}

export default Register;