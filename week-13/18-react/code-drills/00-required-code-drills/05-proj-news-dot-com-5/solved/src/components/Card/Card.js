import React from "react"
import "./card.css"

const Card = props => (
  <div className="news-card">
   <a href={props.link}> <h2>{props.title}</h2></a>

    <img className="news-card__img" src={props.img}/>

    <p>{props.description}</p>
  </div>  
)

export default Card
