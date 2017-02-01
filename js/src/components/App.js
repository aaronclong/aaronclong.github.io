import React, { Component } from 'react';
import '../sass/App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Component
            </p>
            <a className="card-header-icon">
              <span className="icon">
                <i className="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
