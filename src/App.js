import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //<div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //</div>
    <div>
      <Header/>
      <h1>Ini Content</h1>
      <Footer/>
    </div>
  );
}

export default App;
