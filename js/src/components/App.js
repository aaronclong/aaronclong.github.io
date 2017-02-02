import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Body from './Body';
import BodyStore from '../store/body-store';
import Sidebar from './Sidebar';
import SidebarStore from '../store/sidebar-store'
import '../sass/App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Flexbox flexDirection="row" minHeight="100vh">
          < Sidebar store={ SidebarStore } />
          < Body store={ BodyStore } />
        </Flexbox>
      </div>
    );
  }
}

export default App;
