import React, { Component } from 'react';


class HeaderMovie extends Component {
 
  render() {
    return (
    
      <header class= "Header"> 
        <form class= "Searchbar">
          <input 
            placeholder="Search for..."
          />
        </form>
      </header>
      
    );
  }
}




export default HeaderMovie;
