import { Link } from 'react-router-dom';
import './NavTab.css';
import lkLogo from './../../images/lk-logo.svg';
import sideBarLogo from './../../images/side-bar-logo.svg';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

function NavTab() {
  const { loggedIn, routes, location, openSideBar } = useContext(AppContext);
  function openAction() {
    openSideBar();
  }
  return (
    <ul className='nav-tab__links'>
      <Link className='nav-tab__lk-link' to='/profile'>
        Аккаунт{' '}
        <img
          className={`nav-tab__lk-logo  ${
            location === routes.generalRoute ? `nav-tab__lk-logo_blue-color` : ``
          }`}
          src={lkLogo}
          alt='Логотип личного кабинета'
        ></img>
      </Link>
      {location === routes.generalRoute && (
        <Link className='nav-tab__signup-link' to='/signup'>
          Регистрация
        </Link>
      )}
      {location === routes.generalRoute && (
        <Link className='nav-tab__signin-link' to='/signin'>
          Войти
        </Link>
      )}
      {loggedIn && (
        <img
          onClick={openAction}
          src={sideBarLogo}
          className='nav-tab__side-bar'
          alt='Боковое меню'
        ></img>
      )}
    </ul>
  );
}
export default NavTab;
