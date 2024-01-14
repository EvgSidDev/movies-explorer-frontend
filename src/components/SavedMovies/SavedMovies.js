import React from "react";
import LoadOtherButton from '../LoadOtherButton/LoadOtherButton';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <div className='movies'>
      <SearchForm />
      <MoviesCardList makeDelete={true}/>
      <LoadOtherButton />
    </div>
  );
}

export default SavedMovies;
