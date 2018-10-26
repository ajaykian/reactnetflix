import React, { Component } from 'react';
import movie                from './movie.json';


class Card extends Component {
  render() {
    return (
      <div className="card_contaiener">
        { 
            movie.movie.map(function(movies){
                return (        
                    <div className="wrapper-card">
                        <img src={movies.Poster} alt=""></img>
                        <h3>{movies.Title}</h3>
                        <p>{movies.Year}</p>
                        <p>{movies.plot}</p>
                    </div>
                );
            })
        }
      </div>
    );
}}


export default Card;
