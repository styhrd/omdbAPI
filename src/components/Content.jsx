import React from 'react'

const Content = ({ movies, selectedMovie, handleSelectMovie }) => {
    
  return (
      <div>
          {selectedMovie ? (
        <div>
          <h2>{selectedMovie.Title}</h2>
          <p>{selectedMovie.Plot}</p>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
          
        </div>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID} onClick={() => handleSelectMovie(movie.imdbID)}>
              {movie.Title} ({movie.Year})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Content