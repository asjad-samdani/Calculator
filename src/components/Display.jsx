import React from "react";
import displayStyles from "../utils/Display.module.css";

function Display({ displayValue }) {
  return (
    <>
      <input
        type="text"
        className={displayStyles.display}
        value={displayValue}
        readOnly
      />
    </>
  );
}

export default Display;
