import React, { Component } from 'react';

import Layout from './container/Layout/Layout';
import Project from './container/Project/Project';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout>
          <Project />
        </Layout>
      </div>
    );
  }
}

export default App;


