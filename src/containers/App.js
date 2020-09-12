import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">   
        <BurgerBuilder/>   
        <Layout> 
          <p> Testing </p>
        </Layout>
      </div>
    );
  }
}

export default App;
