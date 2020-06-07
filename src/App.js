import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";

// const App = ({name, age}) => <div>Hello there from App.js {name} {age - 4}</div>;
//above is shorter syntax of below App function, it is used when func is of one line
function App({name, age}) {
  return <div>Hello there from App.js {name} {age - 11} <Hello firstname= {name}/></div> ;
   
  
}

export default App;
