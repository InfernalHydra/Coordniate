import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Title } from './title.js'

export default class App extends Component
{
  constructor(props){
    super(props);
    this.state = {start: "none"};
    //this.handleClick = this.handleClick.bind(this);
  }
  onClickC(){

  }
  render() {
    let start = this.state.start;

    if (start == "none")
    {
      return (
        <div>
          <Title/>
          <div><button>create</button></div>
          <div><button>search</button></div>
        </div>
      )
    }
    else if (start == "create")
    {
      return (
        <div>
          <Title/>
        </div>
      );
    }
    else if (start == "search")
    {
      return (
        <div>
          <Title/>
        </div>
      );
    }
  }

}
