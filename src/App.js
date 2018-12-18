import React, { Component } from 'react';
import './App.css';
import Home from './views/home/home';
//import UserList from './components/user/user-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<UserList></UserList>*/}
        <Home></Home>
      </div>
    );
  }
}

export default App;
