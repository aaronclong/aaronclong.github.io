import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { observer } from 'mobx-react';
import '../sass/Body.sass'

@observer
class Body extends Component {
    render() {
       return(
        <Flexbox element="section" flexDirection="column" width="60vh">
          <div className="top-bar"></div>
          <div className="content">
           What's up'
          </div>
        </Flexbox>
       ); 
    }
}

export default Body;