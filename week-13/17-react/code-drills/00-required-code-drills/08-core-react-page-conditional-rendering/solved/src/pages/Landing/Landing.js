import React, {Component} from "react";
import "./landing.css"

import Nav from "../../components/Nav/Nav"
import Input from "../../components/Input/Input"

class Landing extends Component {

  state= {
    entered: false
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  formSubmit = e => {
    e.preventDefault()
    this.setState({
      entered: true
    })
  }



  render() {
    return (
      <div className="landing">
        <Nav name={this.state.name}/>
         <div className="landing__form">
         {this.state.entered ? 
         <p> Welcome, {this.state.name}</p>
        :
        <form onSubmit={this.formSubmit}>
          <Input name="name" type="text" change={this.handleChange}/>
          <div className="landing__submit-btn">
            <Input type="submit" value="Join"/>
          </div>
        </form> 
        }
      </div>  
      </div>  
    )
  }
}

export default Landing