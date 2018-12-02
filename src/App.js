import React, { Component } from 'react';
import './App.css';
import UserList from './components/user/user-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList></UserList>
      </div>
    );
  }
}

export default App;
