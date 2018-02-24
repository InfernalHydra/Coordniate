import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Title } from './title.js'
import { Search } from './search.js'
import { Create } from './create.js'

export default class App extends Component
{
  constructor(props){
    super(props);
    this.state = {start: "none"};
    this.onClickC = this.onClickC.bind(this);
    this.onClickS = this.onClickS.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }
  onClickC(){
    this.setState({start: "create"});
  }
  onClickS(){
    this.setState({start: "search"});
  }
  render() {
    let start = this.state.start;
    console.log(start);
    if (start == "none")
    {
      return (
        <div>
          <Title/>
          <div><button onClick={this.onClickC}>create</button></div>
          <div><button onClick={this.onClickS}>search</button></div>
        </div>
      )
    }
    else if (start == "create")
    {
      return (
        <div>
          <Title/>
          <Create/>
        </div>
      );
    }
    else if (start == "search")
    {
      console.log("YO IM SEARCHING");

      return (
        <div>
          <Title/>
          <Search/>
        </div>
      );
    }
  }

}
