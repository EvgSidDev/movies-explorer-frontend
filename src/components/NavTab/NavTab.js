import { Link } from 'react-router-dom';
import './NavTab.css';
import lkLogo from './../../images/lk-logo.svg';


function NavTab({ loggedIn = false, isMain }) {
  return <ul className='nav-tab__links'>
    <Link className='nav-tab__lk-link' to='/profile'>
        Аккаунт{' '}
        <img
          className={`nav-tab__lk-logo  ${
            isMain ? `nav-tab__lk-logo_blue-color` : ``
          }`}
          src={lkLogo}
          alt='Логотип личного кабинета'
        ></img>
      </Link>
      {isMain && <Link className='nav-tab__signup-link' to='/signup'>Регистрация</Link>}
      {isMain && <Link className='nav-tab__signin-link' to='/signin'>Войти</Link>}
  </ul>;
}
export default NavTab;
