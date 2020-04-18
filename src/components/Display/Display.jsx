import React from "react";

import styles from "./Display.module.css";

const Display = ({ value }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.display}>{value}</h2>
        </div>
    );
};

export default Display;
