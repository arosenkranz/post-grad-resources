import React, {Component} from "react";
import "./landing.css"

import Input from "../../components/Input/Input"

class Landing extends Component {

  state= {

  }

  handleChange = e => {
   const {name, value} = e.target

   this.setState({
     [name]: value
   })
  }

  submitForm = e => {
    e.preventDefault()
    localStorage.setItem("name", this.state.name)
    window.location.href = "/home"
  }

  render () {

    return (
      <div>
       <form onSubmit={this.submitForm}>
         <Input name="name" type="text" onChange={this.handleChange}/>
         <Input type="submit" value="See the news!"/>
       </form>  
      </div>  
    )
  }
}

export default Landing;