import React, {Component} from "react";
import "./home.css"

class Home extends Component {

  state = {
    name: ""
  }

  componentDidMount() {
    const name = localStorage.getItem("name")

    this.setState({
      name: name
    })
  }

  render () {

    return (
      <div>
       Welcome, {this.state.name}
      </div>  
    )
  }
}

export default Home;