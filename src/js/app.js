import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

export default class App extends Component {
  render() {
    return (
      <div>
        React app
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
