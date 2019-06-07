import React, {Component} from "react";
import "./landing.css"

import Nav from "../../components/Nav/Nav"
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



  render() {
    return (
      <div className="landing">
        <Nav name={this.state.name}/>
      
        <div className="landing__form">
          <form>
            <Input name="name" type="text" change={this.handleChange}/>
            <div className="landing__submit-btn">
              <Input type="submit" value="Join"/>
            </div>
          </form> 
        </div>   
      </div>  
    )
  }
}

export default Landing