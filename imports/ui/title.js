import React, {Component} from 'react'

export class Title extends Component{
  constructor(props){
    super(props);
    //this.state = {start: 'none'};
    this.onClickC = this.onClickC.bind(this);
    this.onClickS = this.onClickS.bind(this);
  }
  onClickC(){
    if (this.props.start == 'none' || this.props.start == 'search'){
      this.props.change('create');
    }
    else{
      this.props.change('none');
    }
  }
  onClickS(){
    if (this.props.start == 'none' || this.props.start == 'create'){
      this.props.change('search');
    }
    else{
      this.props.change('none');
    }
  }

  render(){
    return(
      <div>
        <button id="Option" className="oRight" onClick={this.onClickC}>create</button>
        <h1 id="Main-Title">COORDINATE</h1>
        <button id="Option" className="oLeft" onClick={this.onClickS}>search</button>
        <div id="Flat-Line"></div>

      </div>
    );}
  }
