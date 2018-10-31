import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import showCard from './showCard'
import { BrowserRouter, Route, }    from 'react-router-dom';

class App extends Component {
  render() {
    return (
     
        <BrowserRouter>
          <div>
            <Route exact path='./' component={Home}/>
            <Route exact path='./accueil' component={Home}/>
            <Route exact path='./vitrine' component={showCard}/>
            <Home />
          </div>
          </BrowserRouter>
      
    );
  }
}

export default App;
