import React from "react";

import classes from "./styles.module.scss";

const Modal = ({children, isOpen, close}) => {
    const ModalRef = React.createRef();

    const handleESC = event => {
        if (event.keyCode === 27) {
            close();
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", handleESC);

        return () => document.removeEventListener("keydown", handleESC);
    }, [])

    const handleMouseDown = ({target}) => {
        if (target === ModalRef.current) {
           close();
        }
    };

    return isOpen ?
        <div
            className={classes.overlay}
            onMouseDown={handleMouseDown}
            ref={ModalRef}
        >
            {children}
        </div> :
        null
}

export default Modal;