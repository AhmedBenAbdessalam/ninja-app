import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 }
    ]
  };

  addNinja = ninja => {
    ninja.id = this.state.ninjas.length + 1;

    let newNinjas = [...this.state.ninjas]; // make a copy of the ninja array so you can use setState later
    newNinjas.push(ninja);
    this.setState({ ninjas: newNinjas });
    console.log(ninja);
  };
  deleteNinja = id => {
    let newNinjas = this.state.ninjas.filter(ninja => ninja.id !== id);
    this.setState({ ninjas: newNinjas });
  };

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
