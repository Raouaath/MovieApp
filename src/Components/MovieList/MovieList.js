import React from 'react'

import MovieCard from '../MovieCard/MovieCard'

import './MovieList.css'

const MovieList = ({ movies, inputText, value }) => {
  return (
    <div className="movieList">
      {movies
        .filter(movie => movie.title.toUpperCase().includes(inputText.toUpperCase())
          && movie.rating >= value
        )
        .map(movie =>
          <MovieCard movie={movie} key={movie.id} />
        )}
    </div>
  )
}

export default MovieList