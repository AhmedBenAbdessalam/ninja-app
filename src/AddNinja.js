import React, { Component } from "react";

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNinja({ ...this.state });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>fill this form to add a ninja.</p>
        <div>
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="age">Age :</label>
          <input type="text" id="age" onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="belt">Belt color :</label>
          <input type="text" id="belt" onChange={this.handleChange} />
        </div>
        <div>
          <button type="submit">Add ninja</button>
        </div>
      </form>
    );
  }
}
export default AddNinja;
