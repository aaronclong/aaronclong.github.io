import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Body from './Body';
import Sidebar from './Sidebar';
import Store from '../store/Singleton'
import '../sass/App.sass';

class App extends Component {
  render() {
    const { SideBarDataStore, BodyDataStore } = Store;
    return (
      <div className="App">
        <Flexbox flexDirection="row" minHeight="100vh">
          < Sidebar store={ SideBarDataStore } />
          < Body store={ BodyDataStore } />
        </Flexbox>
      </div>
    );
  }
}

export default App;
