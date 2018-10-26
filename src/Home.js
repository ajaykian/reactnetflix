import React, { Component } from 'react';
import './App.css';
import { Link }    from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div >
          <div>
      <Link to="vitrine">
        <button className="home-button">
            Afficher
        </button>
      </Link>
      </div>
      </div>
    );
  }
}

export default Home;
