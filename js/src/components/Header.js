import React, { Component } from 'react';
import { observer } from 'mobx-react';
import "../sass/Header.sass";

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
          <div className="profile-pic"> </div>
          <ul>
            { props.list }
          </ul>
        </div>
    );
}

@observer
class Header extends Component {
    render() {
      let list = this.props.store.getLinks(make_list);
      return (
          <header>
            { nav({ list }) }
          </header>
      );
    }
}

export default Header;
