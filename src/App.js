import logo from './logo.svg';
import './App.css';
import React from 'react';
import Plotly from 'plotly.js'

// import ReactDOM from 'react-dom';

const drawPlot = () => {
  Plotly.newPlot('root',[{
    z: [[1, 20, 30,24,55,45,33], [20, 1, 60,33,66,66,82], [30, 60, 1,67,88,89,100]],
    type: 'heatmap'
  }])}
function App() {
  drawPlot()
  return (

    <div className="App">
     
    </div>
  );
}

export default App;
