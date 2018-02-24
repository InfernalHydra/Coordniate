import React, {Component} from 'react'

const styles = {height: 20 ,textAlign: 'center', border: 'dotted'};

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
      <div style={styles}>
        <button onClick={this.onClickC}>create</button>
        TITLE
        <button onClick={this.onClickS}>search</button>
      </div>
    );}
  }
