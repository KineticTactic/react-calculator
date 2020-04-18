import React from "react";

import cx from "classnames";

import styles from "./Button.module.css";

const Button = ({ value, width, onClick, color }) => {
    return (
        <div className={width ? cx(styles.container, styles.width2) : styles.container} onClick={() => onClick(value)}>
            <div
                className={
                    color === "blue" ? cx(styles.button, styles.blue) : color === "red" ? cx(styles.button, styles.red) : styles.button
                }>
                {value}
            </div>
        </div>
    );
};

export default Button;
