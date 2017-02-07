import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Body from './Body';
import Sidebar from './Sidebar';
import Store from '../store/Singleton'
import '../sass/App.sass';

class App extends Component {
  render() {
    const { BodyDataStore, SideBarDataStore } = Store;
    return (
      <div className="App">
        <Flexbox className="flex-box-container" minHeight="100%">
          < Sidebar store={ SideBarDataStore } />
          < Body store={ BodyDataStore } />
        </Flexbox>
      </div>
    );
  }
}

export default App;
