import React, { Component } from 'react';
import Body from './Body';
import Sidebar from './Sidebar';
import SidebarStore from '../store/sidebar-store'
import '../sass/App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Sidebar store={ SidebarStore } />
        < Body />
      </div>
    );
  }
}

export default App;
