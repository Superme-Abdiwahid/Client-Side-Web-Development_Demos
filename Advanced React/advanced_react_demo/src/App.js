import React from 'react';
import './App.css';
import HomePage from './HomePage';
import GGplots from './GGplots';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>

      
            
    )
  }
}
