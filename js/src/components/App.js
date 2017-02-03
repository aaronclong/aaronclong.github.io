import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Body from './Body';
import PlaceMap from './Map';
import Sidebar from './Sidebar';
import Store from '../store/Singleton'
import '../sass/App.sass';

class App extends Component {
  render() {
    const { BodyDataStore, SideBarDataStore, MapDataStore } = Store;
    return (
      <div className="App">
        <Flexbox flexDirection="row" minHeight="100%">
          < Sidebar store={ SideBarDataStore } />
          < Body store={ BodyDataStore } />
          <PlaceMap store={ MapDataStore } />
        </Flexbox>
      </div>
    );
  }
}

export default App;
