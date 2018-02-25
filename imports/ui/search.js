import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export class Search extends Component{
  render(){
    return (
      <section id="find">

        <SearchBox />
      </section>
    )
  }
}

class SearchBox extends Component{
  constructor(props){
    super(props);
    this.state = {text: '', stuff: []};
    this.send = this.send.bind(this);
  }
send(e){
  let text = e.target.value;
  let searched = [{id: 'qaz'}, {id: 'wsx'}, {id: 'edc'}];
  console.log(searched);
  //ADD REQUEST//
  //SET IT TO {searched}//
  this.setState({text: {text}, stuff: {searched}});
}
render(){
  console.log(this.state);
  return(
    <div>
      <form id="sForm" className="search-container">
        <input type="text" id="itemSearch" placeholder="Search" name="search"/>
      </form>
      <button onClick={this.send}>send</button>
      <Terms stuff={this.state.stuff}/>
    </div>
  )};
}

class Terms extends Component{
  render(){
    let searched = [];

    const list = this.props.stuff.searched;
    for (let x in list)
    {
      let id = list[x].id;
      searched.push(<Boxes key={id} text={id}/>);
    }
    return(
      <div id="listItems">{searched}</div>
    );
  }
}

class Boxes extends Component{
  constructor(props){
    super(props);
    this.state = {selected: true};
    this.onHover = this.onHover.bind(this);
    this.onHoverOut = this.onHoverOut.bind(this);
    this.onClick = this.onClick.bind(this);

  }
  onHover(){
    //this.setState({style: {background: 'blue'}});
  }
  onHoverOut(){
    //this.setState({style: {background: 'red'}});
  }
  onClick(){
    /*
    if(this.state.selected)
    {
      this.setState({selected: false});
    }*/
  }
  render(){
      return(<div onMouseOver={this.onHover} onMouseOut={this.onHoverOut} onClick={this.onClick} style={this.state.style}>
        <i id="icon"><i className="fas fa-baseball-ball"></i></i>
        <section id="inItem">
          <article id="inItemH"><div style={{fontSize: '1.5rem'}}>Alicia</div>&emsp;&emsp;<div style={{fontSize: '1rem', marginTop: '0.3rem'}}>05/02/18</div></article>
          <br/>
          <div style={{overflow: 'hidden', width: '100%', height: '1.25rem'}}>800 W. Campbell Road, Richardson, TX 75080</div>
          <div style={{overflow: 'scroll'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet</div>
        </section>
      </div>);
  }
}
