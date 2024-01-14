import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ location }) {
  const moviesRoute = '/movies';
  const savedMoviesRoute = '/saved-movies';
  return (
    <ul className='navigation'>
      <Link
        className={`navigation__link ${
          location === moviesRoute ? 'navigation__link_active' : ''
        }`}
        to={moviesRoute}
      >
        Фильмы
      </Link>
      <Link
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
