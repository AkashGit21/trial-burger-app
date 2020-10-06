import React, { Component } from 'react';
import Layout from '../HOC/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Layout>             
          <BurgerBuilder/>  
        </Layout>
      </div>
    );
  }
}

export default App;
