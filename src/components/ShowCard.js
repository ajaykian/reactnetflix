import React from 'react'


const ShowCard = props =>(
    
    <div className="wrapper-card">
    <img src={props.movie.Poster} alt="" />
    <div>
      <h3>{props.movie.Title}</h3>
      <h4>{props.movie.Year}</h4>
      <p>{props.movie.Plot}</p>
      <p className="actors">{props.movie.Actors}</p>
    </div>
  </div>
)
export default ShowCard;