
import React from 'react'
import moviesData from './../movie.json';


const ShowCard = props =>(
    <div className="movie-container">
    {moviesData.movie.map(movie =>
    <div className="wrapper-card">
    <img src={movie.Poster} alt="" />
    <div>
      <h3>{movie.Title}</h3>
      <h4>{movie.Year}</h4>
      <p>{movie.Plot}</p>
      
    </div>
      </div>
      )}
  </div>
)
export default ShowCard;

