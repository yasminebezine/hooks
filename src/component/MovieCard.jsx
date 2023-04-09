import React from 'react'

function MovieCard({el}) {
  return (
    <div>
        <img src={el.photo} alt='...' />
        <p>title: {el.title}</p>
        <p>desc : {el.desc}</p>
        <p>rating : {el.rating}</p>
    </div>

  )
}

export default MovieCard