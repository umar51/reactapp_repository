import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import MediaCard from './MediaCard';
import Gate from './Gate';

ReactDOM.render(
  <div><Gate isOpen= {false} /></div>,
  <div><MediaCard title="My Assignment" body="This is the first assignment of react app tutorial" imageUrl="https://media.gettyimages.com/photos/wazir-khan-mosque-lahore-punjab-pakistan-picture-id637623678?s=2048x2048"/></div>,
 // <div><App name = "Umar" age = {25}/></div>,
  //React.createElement("div", null, React.createElement("span", null, "Hello from create element inside create element")),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
