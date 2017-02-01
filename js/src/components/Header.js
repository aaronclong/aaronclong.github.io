import React, { Component } from 'react';
import { observer } from 'mobx-react';
import "../sass/Header.sass";

/* Navigation stateless function */
const nav = props => {
    return ( 
        <div className="nav">
          <div className="profile-pic"> </div>
          <ul>
            <li>About Me</li>
            <li>Resumé</li>
          </ul>
        </div>
    );
}

@observer
class Header extends Component {
    render() {
      return (
          <header>
            { nav() }
          </header>
      );
    }
}

export default Header;
