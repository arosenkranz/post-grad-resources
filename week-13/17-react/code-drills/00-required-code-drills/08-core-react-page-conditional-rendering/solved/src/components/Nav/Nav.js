import React from "react";
import "./nav.css"

const Nav = props => (
  <div className="nav">

    <div className="nav__greeting">
      <p>Welcome, {props.name}</p>
    </div>  
  </div>  
)

export default Nav;
