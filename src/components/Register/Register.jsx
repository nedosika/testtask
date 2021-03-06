import React from "react";
import classNames from "classnames";

import userService from "services";

import PositionItem from "./components/PositionItem";
import UploadFile from "./components/UploadFile";
import Input from "./components/Input";

import styles from "./register.module.scss";
import Modal from "../Modal";
import Dialog from "./components/Dialog";

const Register = () => {
    const [user, setUser] = React.useState({});
    const [positions, setPositions] = React.useState([]);
    const [errors, setErrors] = React.useState({});

    const fileInput = React.useRef();
    const ModalRef = React.useRef({});

    const handleChange = (event) => {
        const {currentTarget: {name, value}} = event;

        setUser(state => ({
            ...state,
            [name]: value
        }))
    }

    const handleFileSelected = () => {
        setUser(state => ({
            ...state,
            photo: fileInput.current.files[0]
        }));
    }

    React.useEffect(() => {
        userService
            .getPositions()
            .then(setPositions);
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        // userService
        //     .register(user)
        //     .then((data) => {
        //         setUser({});
        //         setErrors({});
        //         ModalRef.current.open();
        //         console.log(data);
        //     })
        //     .catch(setErrors)
                ModalRef.current.open();
    }

    return (
        <section className={styles.wrapper} id={"register"}>
            <h2 className={styles.title}>Register to get a work</h2>
            <p className={styles.desc}>
                Attention! After successful registration and alert, update the list of users in the block from the
                top
            </p>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <Input
                    label="Name"
                    placeholder="Your name"
                    name="name"
                    value={user.name}
                    handleChange={handleChange}
                    error={errors && errors.fails && errors.fails.name}
                />
                <Input
                    label="Email"
                    placeholder="Your email"
                    name="email"
                    value={user.email}
                    handleChange={handleChange}
                    error={errors && errors.fails && errors.fails.email}
                />
                <Input
                    label="Phone number"
                    placeholder="+380 XX XXX XX XX"
                    name="phone"
                    value={user.phone}
                    handleChange={handleChange}
                    error={errors && errors.fails && errors.fails.phone}
                />
                <div className={styles.inputPosition}>
                    <h3 className={styles.positionTitle}>Select your position</h3>
                    {positions.map((position) =>
                        <PositionItem key={position.id}>
                            <input type={"radio"} name={"position_id"} value={position.id}
                                   onChange={handleChange}/>{position.name}
                        </PositionItem>
                    )}
                </div>
                <UploadFile photo={user.photo && user.photo.name} error={errors && errors.fails && errors.fails.photo}>
                    <input
                        style={{display: "none"}}
                        type="file"
                        name="photo"
                        onChange={handleFileSelected}
                        ref={fileInput}
                    />
                </UploadFile>
                <button className={classNames("btn", styles.btnSubmit)}>Sign up now</button>
            </form>
            <Modal ref={ModalRef}>
                <Dialog onClose={ModalRef.current.close}/>
            </Modal>
        </section>
    );
}

export default Register;