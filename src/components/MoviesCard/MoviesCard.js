import './MoviesCard.css';
import movieDelete from '../../images/movie-delete.svg';
import movieLiked from '../../images/movie-liked.svg';
import movieNotLiked from '../../images/movie-not-liked.svg';
import test from '../../images/photo.jpg';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
function MoviesCard({ makeDelete = false, isLiked = false, data = {} }) {
  const { sideBarIsOpen } = useContext(AppContext);

  const { url = test, title = 'Название фильма', duration = 0, number } = data;

  return (
    <li className={`card ${ sideBarIsOpen ? 'card_dark' : ''}`}>
      <img className='card__image' src={url} alt={title}></img>
      <div className='card__description'>
        <div className='card__title-duration'>
          <p className='card__title'>{title}</p>
          <p className='card__duration'>{duration}</p>
        </div>
        {makeDelete ? (
          <img
            className='card__delete'
            src={movieDelete}
            alt='Удалить из избранного'
          ></img>
        ) : (
          <img
            className='card__like'
            src={`${isLiked ? movieLiked : movieNotLiked}`}
            alt='Добавлено в избранное'
          ></img>
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
