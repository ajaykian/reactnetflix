import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';



class Home extends Component {
  render() {
    return (
      <div classname="Home">
        <header className = "Home-header" >
          <Link to="/Card" className = 'home-button'> Afficher </Link> 
        </header>
      </div>
    );
  }
}

export default Home;
