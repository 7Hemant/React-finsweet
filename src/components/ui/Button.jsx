import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={`${props.style} ${classes.btn} `}>{props.value}</button>
  );
};

export default Button;
