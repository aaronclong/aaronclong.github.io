import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { observer } from 'mobx-react';
import Store from '../store/Singleton'
import '../sass/Body.sass'


@observer
class Body extends Component {
    render() {
       let content = this.props.store.getCurrent;
       return(
          <Flexbox element="section" flexDirection="column" width="50vh">
            <div className="top-bar"></div>
            <div className="content">
              { content }
            </div>
          </Flexbox>
       ); 
    }
}

export default Body;