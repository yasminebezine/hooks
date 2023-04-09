import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movie}) {
  return (
    <div>{movie.map((el, key) =>{
    return <MovieCard el={el}/>})}</div>
  )
}

export default MovieList