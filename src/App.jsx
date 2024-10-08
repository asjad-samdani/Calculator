import React from "react";
import styles from "./utils/App.module.css";
import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";

function App() {
  const [calValue, setCalValue] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "Clr") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newValue = calValue + buttonText;
      setCalValue(newValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calValue} />
      <Button handleButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
