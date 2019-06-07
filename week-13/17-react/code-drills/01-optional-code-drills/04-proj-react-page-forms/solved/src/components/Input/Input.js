import React from "react";
import "./input.css";

const Input = props => (
  <div>
    <input className="input" name={props.name} onChange={props.change} type={props.type} value={props.value}/>
  </div>
)

export default Input;