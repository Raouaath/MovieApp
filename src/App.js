import React, { useState } from 'react'

import MoviesData from './Components/MoviesData/MoviesData';
import MovieList from './Components/MovieList/MovieList'
import FilterByTitle from "./Components/Filter/Filter";
import FilterByRating from './Components/Rating/Rating'
import AddMovie from './Components/AddMovie/AddMovie';

import './App.css';

function App() {

  const [movies, setMovies] = useState(MoviesData);
  const [inputText, setInputText] = useState("");
  const [value, setValue] = useState(1);
 


  return (
    <div className="App">
      <div className="filterPart">
        <FilterByTitle inputText={inputText} setInputText={setInputText} />
        <FilterByRating isFilter={true} value={value} setValue={setValue} />
      </div>
      <AddMovie movies={movies} setMovies={setMovies} />
      <MovieList movies={movies} inputText={inputText} value={value} />
    </div>
  );
}

export default App;
