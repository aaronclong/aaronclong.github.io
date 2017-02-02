import React, { Component } from 'react';
import Header from './Sidebar';
import HeaderStore from '../store/sidebar-store'
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
