import React from 'react';
import "./Hello.css";


function Hello({firstname}) {
  return <p className = "myname" >Hello there from Hello.js called inside App.js by {firstname} </p> ;
   
  
}

export default Hello;