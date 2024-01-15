import './header.css';
import headerLogo from './../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';

function Header({ isMain = false, location, loggedIn, openAction }) {
  return (
    <div className={`header  ${isMain ? `header_blue-color` : ``}`}>
      <Link to='/'>
        <img src={headerLogo} alt='Логотип' className='header__logo' />
      </Link>
      <Navigation location={location} />
      <NavTab loggedIn={loggedIn} isMain={isMain} openAction={openAction} />
    </div>
  );
}

export default Header;
