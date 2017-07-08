import React, { Component } from 'react';
import Heading from './containers/Heading';
import Topic from './containers/Topic';
import Cards from './containers/Cards';
import Card2 from './containers/Card2'

/* global screen */
/*eslint no-restricted-globals: [0]*/
class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <Topic />
        <Cards />
        <Card2 />
      </div>
    );
  }
}

export default App;
