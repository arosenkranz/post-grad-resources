import React from "react"
import "./input.css"

const Input = props => (
  <div>
    <input name={props.name} onChange={props.onChange} type={props.type} value={props.value}/>
  </div>  
)

export default Input