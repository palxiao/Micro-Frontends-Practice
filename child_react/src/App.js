/*
 * @Author: ShawnPhang
 * @Date: 2022-05-16 16:51:21
 * @Description:  
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2022-05-17 10:50:34
 * @site: book.palxp.com
 */
import logo from './logo.svg';
import './App.css';
import React from 'react'
const logo2 = require('./logo.svg').default

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
