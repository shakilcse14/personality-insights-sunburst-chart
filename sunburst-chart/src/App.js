import React, { Component } from 'react';
import './App.css';
import SunburstChart from './SunburstChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        Sunburst Chart
        <SunburstChart />
      </div>
    );
  }
}

export default App;
