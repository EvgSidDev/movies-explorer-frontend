import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ makeDelete }) {
  return (
    <ul className='movies__list'>
      <MoviesCard isLiked={true} makeDelete={makeDelete} />
      <MoviesCard isLiked={true} makeDelete={makeDelete} />
      <MoviesCard isLiked={true} makeDelete={makeDelete} />
      <MoviesCard isLiked={true} makeDelete={makeDelete} />
      <MoviesCard isLiked={true} makeDelete={makeDelete} />
      <MoviesCard isLiked={true} makeDelete={makeDelete} />
      <MoviesCard isLiked={false} makeDelete={makeDelete} />
    </ul>
  );
}

export default MoviesCardList;
