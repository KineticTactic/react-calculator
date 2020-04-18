import React, { useState } from "react";

import Display from "./components/Display/Display";
import Button from "./components/Button/Button";

import styles from "./App.module.css";

const App = () => {
    const [expression, setExpression] = useState("");
    const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const handleInput = (val) => {
        /// × = Alt 0215
        /// ÷ = Alt 0247
        if (val === "«") {
            setExpression(expression.slice(0, -1));
        } else if (val === "C") {
            setExpression("");
        } else if (val === "=") {
            setExpression(eval(expression.replace("÷", "/").replace("×", "*").replace("^", "**")));
        } else {
            setExpression(expression + val);
        }
        console.log(expression);
    };

    return (
        <div className={styles.container}>
            <Display value={expression} style={styles.display} />
            <Button value="C" onClick={handleInput} color="red" />
            <Button value="«" onClick={handleInput} />
            <Button value="^" onClick={handleInput} />
            <Button value="÷" onClick={handleInput} />
            <Button value="7" onClick={handleInput} />
            <Button value="8" onClick={handleInput} />
            <Button value="9" onClick={handleInput} />
            <Button value="×" onClick={handleInput} />
            <Button value="4" onClick={handleInput} />
            <Button value="5" onClick={handleInput} />
            <Button value="6" onClick={handleInput} />
            <Button value="-" onClick={handleInput} />
            <Button value="1" onClick={handleInput} />
            <Button value="2" onClick={handleInput} />
            <Button value="3" onClick={handleInput} />
            <Button value="+" onClick={handleInput} />
            <Button value="0" onClick={handleInput} width={2} />
            <Button value="." onClick={handleInput} />
            <Button value="=" onClick={handleInput} height={2} color="blue" />
        </div>
    );
};

export default App;
