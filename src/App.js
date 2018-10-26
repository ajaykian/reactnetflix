import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import showCard from './showCard'
import { BrowserRouter,Route }    from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <BrowserRouter>
          <div>
            <Route exact path='./' component={Home}/>
            <Route exact path='./accueil' component={Home}/>
            <Route exact path='./vitrine' component={showCard}/>
          </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
