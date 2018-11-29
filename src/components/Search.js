import React, { Component } from "react";
import moviesData from "../movie.json";
import ShowCard from "./ShowCard.js";

class Search extends Component{
 
    state = {
      searchTerm: ''
    }
    handleSearchTermChange = (event) =>{
      this.setState({ searchTerm: event.target.value })
  }
  render() {
    return(
      <div className="search-container">
      <header>
        <h1> {this.state.searchTerm}</h1>
        <input 
        onChange={this.handleSearchTermChange} 
        value={this.state.searchTerm}
        type="text" 
        placeholder="search" 
        />
      </header>
  <div className="movie-container">
    {moviesData.movie
      .filter(movie=> `${movie.Title} ${movie.Plot} ${movie.Year} ${movie.Actors}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase())>=0
      )
      .map(movie => <ShowCard movie={movie} key={movie.imdbID}{...movie} />)}
  </div>
    </div>
    );
  }
}
export default Search;