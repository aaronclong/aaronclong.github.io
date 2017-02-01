import React, { Component } from 'react';
import Header from './Header';
import HeaderStore from '../store/header-store'
import '../sass/App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header store={ HeaderStore } />
      </div>
    );
  }
}

export default App;
