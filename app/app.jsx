import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Notecard from './components/Notecard';
import Navbar from './components/Navbar';
import styles from './scss/application.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };

  }

  render() {
    return (
      <div>
        <Navbar />

      </div>
    )
  }
}

render (<App />,document.getElementById('app'));