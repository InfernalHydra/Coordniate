import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export class Create extends Component{
  constructor(props){
    super(props);
    this.state = {send: false, name: '', desc: '', add: '', cate: ''};
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
    else if (type == 'desc'){
      this.setState({desc: val});
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
    console.log(e.target.value);
    this.props.select(true);
  }
  send(){
    console.log(this.state);
    this.setState({send: true});
    let text = document.getElementsByClassName('itemTextArea');
    console.log(text[0].value);
    //SEND INFO
    this.setState({send: false, name: '', desc: ''});
    this.props.change('none');

  }
  render(){
    if (this.state.send){
      return null;
    }
    else{
      return(
        <div id="rightSideBar">
          <div id="formBox">
            <div id="itemText">
              <input type='text' placeholder="Name" name='name' id="itemInput" onChange={this.handleChange}/><br/>
              <input type='text' placeholder="Title" name='desc' id="itemInput" onChange={this.handleChange}/><br/>

              <input type="text" placeholder="Address" name='add' id="itemInput" onChange={this.handleChange}/> <br/>
              <select name='cate' id="itemInput" onClick={this.handleSelect}>
                <option value='Category'>Category</option>
              </select>
              <textarea placeholder="Description" id="itemInput" className="itemTextArea" rows="1" cols="22"/> <br/>

              <button id="itemInput" style={{backgroundColor: '#fff'}} onClick={this.send}>CREATE</button>
            </div>
          </div>
        </div>
      )
    }

  }
}
