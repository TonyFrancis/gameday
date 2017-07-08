import React, { Component } from 'react';
import Heading from './containers/Heading';
import Topic from './containers/Topic';
import Cards, { Card2 , Card4, Card5, Card6, Card7, Card8} from './containers/Cards';

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
        <Card4 />
        <Card5 />
        <Card6 />
        <Card7 />
        <Card8 />
      </div>
    );
  }
}

export default App;
