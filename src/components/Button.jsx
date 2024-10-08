import React from "react";
import buttonStyles from "../utils/Button.module.css";

function Button({ handleButtonClick }) {
  const buttonsNames = [
    "Clr",
    "+",
    "-",
    "/",
    "*",
    "=",
    "%",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
  ];
  return (
    <>
      <div className={buttonStyles.buttonscontainer}>
        {buttonsNames.map((buttonName, index) => (
          <button
            key={index}
            className={buttonStyles.button}
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
}

export default Button;
