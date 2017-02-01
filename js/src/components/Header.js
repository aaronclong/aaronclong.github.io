import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../sass/Header.sass';
import ln from '../img/linkedin.svg';

/** Convert list into their html form */
const make_list = props => {
  return(
    <li key={ props.id } >
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
             <div className="profile-pic"></div>
             <img src={ ln } alt="Aaron's LinkedIn" />
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
class Header extends Component {
    render() {
      let list = this.props.store.getLinks(make_list),
          linkedIn = this.props.store.linkedIn;
      return (
          <header>
            { nav({ list, linkedIn }) }
          </header>
      );
    }
}

export default Header;
