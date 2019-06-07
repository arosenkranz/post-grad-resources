import React, {Component} from "react";
import "./home.css"
import API from "../../utils/API";

class Home extends Component {

  state = {
    name: ""
  }

  componentDidMount() {
    const name = localStorage.getItem("name")

    API.getNews().then(data => {
      console.log(data)
    })

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