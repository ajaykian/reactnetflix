import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Card from './showCard';
import { BrowserRouter as Router, Route }    from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
        <Router>
          <div>

            <Route exact path='/' component={Home}/>
            <Route exact path='/Home' component={Home}/>
            <Route  path='/Card' component={Card}/>
           
          </div>
        </Router>
        </div>
    
    );}
}

export default App;
