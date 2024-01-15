import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ location, closeAction }) {
  const general = '/';
  const moviesRoute = '/movies';
  const savedMoviesRoute = '/saved-movies';
  return (
    <ul className='navigation'>
      <Link
        onClick={closeAction}
        className={`navigation__link ${
          location === general ? 'navigation__link_active' : ''
        }`}
        to={general}
      >
        Главная
      </Link>
      <Link
        onClick={closeAction}
        className={`navigation__link ${
          location === moviesRoute ? 'navigation__link_active' : ''
        }`}
        to={moviesRoute}
      >
        Фильмы
      </Link>
      <Link
        onClick={closeAction}
        className={`navigation__link ${
          location === savedMoviesRoute ? 'navigation__link_active' : ''
        }`}
        to={savedMoviesRoute}
      >
        Сохраненные фильмы
      </Link>
    </ul>
  );
}

export default Navigation;
