import React, { Component } from 'react';
import { Route } from 'react-router';

import Layout from './container/Layout/Layout';
import Project from './container/Project/Project';
import About from './container/About/About';
import Sharing from './container/Sharing/Sharing';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout>
          <Route path="/" exact component={Project} />
          <Route path="/about" component={About} />
          <Route path="/sharing" component={Sharing} />
          {/* <Project />
          <About /> */}
        </Layout>
      </div>
    );
  }
}

export default App;


