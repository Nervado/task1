import React, { Component } from 'react';
import './App.css';

import UserInput from './Components/UserInput'
import UserOuput from './Components/UserOutput'

class App extends Component {
  state = { username: 'Joe' }

  handleUserState = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {

    const titleStyle = {
      backgroundColor: 'skyblue',
      width: '200px',
      alignSelf: 'center',
    }

    return (
      <div className="App" >
        <h1 style={titleStyle}>Hello Guys!</h1>
        <UserInput username={this.state.username} changed={this.handleUserState} />
        <UserOuput
          frase=" Hello from planet earth!"
          username={this.state.username}
        />
        <UserOuput
          frase=" Hello from planet mars!"
          username="Max"
        />
      </div>
    )
  }
};

export default App;
