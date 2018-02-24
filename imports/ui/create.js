import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export class Create extends Component{
  constructor(props){
    super(props);
    this.state = {send: false, name: '', desc: ''};
    this.send = this.send.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    var type = e.target.name;
    var val = e.target.value;
    console.log(this.state);
    if (type == 'name'){
      this.setState({name: val});
    }
    else if (type == 'desc'){
      this.setState({desc: val});
    }
  }
  send(){
    this.setState({send: true});
    //SEND INFO
    
    this.setState({send: false, name: '', desc: ''});
  }
  render(){
    if (this.state.send){
      return null;
    }
    else{
      return(
        <div>
          <input type='text' name='name' onChange={this.handleChange}/>
          <input type='text' name='desc' onChange={this.handleChange}/>
          <button onClick={this.send}>CREATE</button>
        </div>
      )
    }

  }
}
