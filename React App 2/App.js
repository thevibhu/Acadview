import React, { Component } from 'react';
import Display from './Display'
import './MyApp.css';

class App extends Component {
  render() {

    return (
      <div className="App">
      <div className="chikna"> <h3>Biodata</h3></div>
      <h1 className="heading"> hello friends </h1>
      <p> ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      <Display  name="Chander Mohan" age="21" birthmonth="July"/>
      <Display name="Shivam Sharma" age="21" birthmonth="June"/>

      </div>
    );
  }
}

export default App;
