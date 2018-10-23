
import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom'
import FillerText from './FillerText';
export default class Webpage extends React.Component{
  render()
  {
    return(
      <div>
  <h1>The world's coolest webpage</h1>
  <FillerText />
   <FillerText />
    </div>
  );
  }
}
