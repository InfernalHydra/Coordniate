import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export class Search extends Component{
  render(){
    return (
      <div>
        <SearchBox/>
      </div>
    )
  }
}

class SearchBox extends Component{
  constructor(props){
    super(props);
    this.state = {text: '', stuff: []};
    //this.handleChange = this.handleChange.bind(this);
    this.send = this.send.bind(this);
  }
  /*
  handleChange(e){
    let searched = [{id: 'qaz'}, {id: 'wsx'}, {id: 'edc'}];
    this.setState({text: {text}, stuff: {searched}});
  }*/
  send(e){
    let text = e.target.value;
    let searched = [{id: 'qaz'}, {id: 'wsx'}, {id: 'edc'}];
    //ADD REQUEST//
    //SET IT TO {searched}//
    this.setState({text: {text}, stuff: {searched}});
  }
  render(){
    console.log(this.state);
    return(
    <div>
      <input type='text'/>
      <button onClick={this.send}>send</button>
      <Terms stuff={this.state.stuff}/>
    </div>
  )};
}

class Terms extends Component{
  render(){
    let searched = [];

    console.log(this.props.stuff);
    const list = this.props.stuff.searched;
    for (let x in list)
    {
      let id = list[x].id;
      console.log(id);
      searched.push(<Boxes key={id} text={id}/>);
    }
    return(
      <ol>{searched}</ol>
    );
  }
}

class Boxes extends Component{
  constructor(props){
    super(props);
    this.state = {selected: true, style: {background: 'red', width: '100px'}};
    this.onHover = this.onHover.bind(this);
    this.onHoverOut = this.onHoverOut.bind(this);
    this.onClick = this.onClick.bind(this);

  }
  onHover(){
    this.setState({style: {background: 'blue'}});
  }
  onHoverOut(){
    this.setState({style: {background: 'red'}});
  }
  onClick(){
    console.log('clicked');
    if(this.state.selected)
    {
      this.setState({selected: false});
    }
  }
  render(){
    console.log(this.state.selected);
    if (this.state.selected){
      return(<div onMouseOver={this.onHover} onMouseOut={this.onHoverOut} onClick={this.onClick} style={this.state.style}>
        {this.props.text}
      </div>);
    }
    else {
      return null;
    }
  }
}
