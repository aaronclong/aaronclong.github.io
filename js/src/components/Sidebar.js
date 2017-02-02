import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../sass/Sidebar.sass';
import ln from '../img/linkedin.svg';

/** Convert list into their html form */
const make_list = props => {
  return(
    <li key={ props.id } >
       { props.name }
    </li>
  );
}

const linked = bool => {
  let cmp = null;  
  if(bool == true) {
    cmp = <div className="linkedin"><img src={ ln } height="50px" /></div>
  }
  return cmp;
}

/* Navigation stateless function */
const nav = props => {
    return ( 
        <div className="nav">
          <div>
            <div className="profile">
              { linked(props.linkedIn) }
             <div className="profile-pic" onMouseOver={ props.callback } ></div>
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
      let list = this.props.store.getLinks(make_list),
          linkedIn = this.props.store.linkedIn,
          callback = this.props.store.toggleLinkedIn.bind(this);
      return (
          <aside>
            { nav({ list, linkedIn, callback }) }
          </aside>
      );
    }
}

export default Sidebar;
