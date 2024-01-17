import { Link } from 'react-router-dom';
import './Navigation.css';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

function Navigation() {
  const { routes, location, closeSideBar } = useContext(AppContext);

  return (
    <ul className='navigation'>
      <Link
        onClick={closeSideBar}
        className={`navigation__link ${
          location === routes.generalRoute ? 'navigation__link_active' : ''
        }`}
        to={routes.generalRoute}
      >
        Главная
      </Link>
      <Link
        onClick={closeSideBar}
        className={`navigation__link ${
          location === routes.moviesRoute ? 'navigation__link_active' : ''
        }`}
        to={routes.moviesRoute}
      >
        Фильмы
      </Link>
      <Link
        onClick={closeSideBar}
        className={`navigation__link ${
          location === routes.savedMoviesRoute ? 'navigation__link_active' : ''
        }`}
        to={routes.savedMoviesRoute}
      >
        Сохраненные фильмы
      </Link>
    </ul>
  );
}

export default Navigation;
