import React from "react";

import classes from "./styles.module.scss";

const Modal = ({children}, ref) => {
    const [open, setOpen] = React.useState(false);

    const OverlayRef = React.useRef({});

    const handleESC = event => {
        if (event.keyCode === 27) {
            setOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", handleESC);

        return () => document.removeEventListener("keydown", handleESC);
    }, []);

    React.useImperativeHandle(ref, () => ({
        open: () => setOpen(true)
    }));


    const handleMouseDown = ({target}) => {
        if (target === OverlayRef.current) {
           setOpen(false);
        }
    };

    return open &&
        <div
            className={classes.overlay}
            onMouseDown={handleMouseDown}
            ref={OverlayRef}
        >
            {children}
        </div>
}

export default React.forwardRef(Modal);