import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component
{
  constructor(props){
    super(props);
    this.state = {color: red};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    let color = this.state.color == "red" ? "blue" : "red";
    this.setState({color: color});
  }
  render() {
    return (
      <button onClick={handleClick}> CLICK MEH </button>
    );
  }
}
