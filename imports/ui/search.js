import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { Events } from '../api/events.js';

export class Search extends Component{
  constructor(props){
    super(props);
    this.state = {text: '', stuff: []};
    this.send = this.send.bind(this);
  }
send(e){
  e.preventDefault();
  let text = e.target.value;
  let searched = Events.find({address : text}).fetch();
  this.setState({text: {text}, stuff: {searched}});
  var geocoder = new google.maps.Geocoder();
  console.log(text);
  const promise = new Promise((resolve, reject) => {
    geocoder.geocode({'address' : {text}}, (res, status) => {
    if (status == 'OK') {
      console.log(res);
      //console.log(res[0].geometry.location.lat());
      var foo = [0,0];
      foo[0] = res[0].geometry.location.lat();
      foo[1] = res[0].geometry.location.lng();
      resolve(foo);
      console.log(foo);
    }
    else {
      reject("error")
      console.log(status);
    }
  })}, () => {reject("error")});
  promise.then((coords) =>{
  Events.update({poi:{ $exists: true}}, {$set : {poi : text, lat : coords[0], lng : coords[1]}})
  });
 }
render(){
  return(
    <section id="find">
      <form id="sForm">
        <input type="text" id="itemSearch" placeholder="Search" name="search"/>
        <button id="seButton" class="hButton" onClick={this.send}>SEND</button>
      </form>
      <Terms stuff={this.state.stuff}/>
    </section>
  )};
}

class Terms extends Component{
  render(){
    let searched = [];
    const list = this.props.stuff;
    //console.log(list);
    for (let x in list)
    {
      searched.push(<Boxes key={list[x].address} text={list[x]}/>);
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
    let text = this.props.text;

      return(<div onMouseOver={this.onHover} onMouseOut={this.onHoverOut} onClick={this.onClick} style={this.state.style}>
        <section id="inItem">
          <article id="inItemH"><div style={{fontSize: '1.5rem'}}>{text.title}</div>&emsp;&emsp;<div style={{fontSize: '1rem', marginTop: '0.3rem'}}>05/02/18</div>
          </article>
          {this.name}
          <div style={{overflow: 'hidden', width: '100%', height: '1.25rem'}}>{text.address}, {text.city}, {text.state} {text.zip}</div>
        </section>
        <i id="icon"><i className="fas fa-baseball-ball"></i></i>
        <span id="rTool">This is a baseball game.</span>
      </div>);
  }
}
export default withTracker(() => {
  const subscription = Meteor.subscribe('events');
  return {
    isReady : subscription.ready(),
    events: subscription.ready() && Events.find({}).fetch()
  };
})(Search);
