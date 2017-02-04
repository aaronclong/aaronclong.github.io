import Flexbox from 'flexbox-react';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import Store from '../store/Singleton'
import '../sass/Sidebar.sass';

/** Callback to Change content */
const selected = i => {
  const setter = () => { Store.BodyDataStore.setCurrent(i); }
  return setter;
}

/** Convert list into their html form */
const make_list = props => {
  return(
    <li key={ props.id } onClick={ selected(props.id) } >
       { props.name }
    </li>
  );
}

/* Navigation stateless function */
const nav = props => {
    return ( 
        <div className="nav">
          <div>
            <div className="profile">
             <div className="profile-pic" ></div>
            </div>
          </div>
          <ul>
            { props.list }
          </ul>
        </div>
    );
}


//Main Stateful component for header 
@observer
class Sidebar extends Component {
    render() {
      let list = this.props.store.getLinks(make_list);
      return (
           <Flexbox element="aside" margin="4vh" minHeight="100vh">
            { nav({ list }) }
          </Flexbox>
      );
    }
}

export default Sidebar;
