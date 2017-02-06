import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Body from './Body';
import PlaceMap from './Map';
import Sidebar from './Sidebar';
import Store from '../store/Singleton'
import '../sass/App.sass';

const flexLayout = () => {
  console.log(window.innerHeight)
  if (window.innerHeight < 768) return "column"
  return "row";
}

class App extends Component {
  render() {
    const { BodyDataStore, SideBarDataStore } = Store;
    return (
      <div className="App">
        <Flexbox flexDirection={ flexLayout() } minHeight="100%">
          < Sidebar store={ SideBarDataStore } />
          < Body store={ BodyDataStore } />
        </Flexbox>
      </div>
    );
  }
}

export default App;
