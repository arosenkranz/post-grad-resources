import React, {Component} from "react";
import "./landing.css"

import Nav from "../../components/Nav/Nav"
import Input from "../../components/Input/Input"

class Landing extends Component {




  render() {
    return (
      <div className="landing">
        <Nav/>
      
        <div className="landing__form">
          <form>
            <Input type="text"/>
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