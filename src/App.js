import React, {Component} from 'react';
import Ninjas from './ninjas';
import Addninjas from './addNinja';

class App extends Component {
  state = {
    ninjas : [
     { name : 'Ryu', age: 30, belt: 'black', id: 1},
     { name: 'Yoshi', age: 20, belt: 'green', id: 2},
     { name: 'Crystal', age: 25, belt: 'pink', id: 3}
    ]
  };

  addNinja = (ninja) => { //function adds a ninja to a state
    ninja.id = Math.random(); // adding a dynamic id property to the object78

    // states cannot be updated directly so we'll copy the old array, add the new value and set the state to that
    let ninjas = [...this.state.ninjas, ninja];

    this.setState({
      ninjas : ninjas
    });

  };

  deleteNinja = (id) => { // function deletes a ninja from the state
    let ninjas = this.state.ninjas.filter(ninja => { // we cannot alter react state, so we filter
      return ninja.id !== id
    });

    this.setState({
      ninjas : ninjas
    })
  };

  
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <Addninjas addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
