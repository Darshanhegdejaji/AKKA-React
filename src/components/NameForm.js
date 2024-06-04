import React, { Component } from 'react';
import './Style.css'
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value + 'phone-no:' + this.state.value + 'E-mail:' +this.state.value );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1> Register Here</h1>
        <label>>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Name" />
        </label>
        <br/>
        <label>
         <input type="number" value={this.state.value} onChange={this.handleChange} placeholder="Enter Phone Number" />
         </label>
         <br/>
         <label>
        <input type="Email" value={this.state.value} onChange={this.handleChange} placeholder="Enter Email" />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm