import React from "react"
import "./button.css"

const Button = props => (
  <div>
    <button className="button" onClick={props.onClick}>{props.source}</button>
  </div>  
)

export default Button