import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { Events } from '../api/events.js';

export class Create extends Component{
  constructor(props){
    super(props);
    this.state = {send: false, name: '', title: '', add: '', cate: ''};
    this.send = this.send.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleChange(e){
    var type = e.target.name;
    var val = e.target.value;
    if (type == 'name'){
      this.setState({name: val});
    }
    else if (type == 'title'){
      this.setState({title: val});
    }
    else if (type == 'add'){
      this.setState({add: val});
    }
    else if (type == 'cate'){
      this.setState({cate: val});
    }
  }
  handleSelect(e){
    e.preventDefault();
    this.props.select(true);
  }
  send(){
    this.setState({send: true});
    let text = document.getElementsByClassName('itemTextArea');
    console.log(text[0].value)
    if(this.props.isReady)
    {
      events.insert({
        name: this.state.name,
        title: this.state.title,
        address: this.state.add,
        category: this.state.cate,
        description: text[0].value,
      })
    }
    //SEND INFO
    this.setState({send: false, name: '', title: ''});
    this.props.change('none');

  }
  render(){
    if (this.state.send){
      return null;
    }
    else{
      return(
        <section id="create">
          <form id="itemText">
            <input type='text' placeholder="Name" name='name' id="itemInput" onChange={this.handleChange}/><br/>
            <input type='text' placeholder="Title" name='title' id="itemInput" onChange={this.handleChange}/><br/>

            <input type="text" placeholder="Address" name='add' id="itemInput" onChange={this.handleChange}/> <br/>
            <select name='cate' id="itemInput" onClick={this.handleSelect}>
              <option value='Category'>Category</option>
            </select>
            <textarea placeholder="Description" id="itemInput" className="itemTextArea" rows="1" cols="22"/> <br/>

            <button id="itemInput" style={{backgroundColor: '#fff'}} onClick={this.send}>CREATE</button>
          </form>
        </section>
      )
    }

  }
}

export default withTracker(() => {
  const subscription = Meteor.subscribe('events');
  return {
    isReady : subscription.ready(),
    events: subscription.ready() && Events.find({}).fetch()
  };
})(Create);
