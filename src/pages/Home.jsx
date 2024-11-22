import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, fetchMovieDetails, clearSelectedMovie } from '../store/MoviesSlice';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content'

const Home = () => {

  const [query, setQuery] = useState('');
  const dispatch = useDispatch()
  const {movies, selectedMovie} = useSelector((state)=> state.movies)

  const handleSearch = () => {
    dispatch(fetchMovies(query));
    dispatch(clearSelectedMovie());
  };

  const handleSelectMovie = (id) => {
    dispatch(fetchMovieDetails(id));
  };

  return (
    <div>
      <h1 className='px-5 font-bebas text-primary'>NETFLIX </h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <Content movies={movies} selectedMovie={selectedMovie} handleSelectMovie={handleSelectMovie} />

    </div>
  )
}

export default Home