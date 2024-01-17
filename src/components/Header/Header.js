import './header.css';
import headerLogo from './../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
import { AppContext } from '../../contexts/AppContext';
import { useContext } from 'react';


function Header() {
  const { loggedIn, routes, location } = useContext(AppContext);
  
  return (
    <div className={`header  ${location === routes.generalRoute ? `header_blue-color` : ``}`}>
      <Link to='/'>
        <img src={headerLogo} alt='Логотип' className='header__logo' />
      </Link>
      <Navigation location={location} />
      <NavTab loggedIn={loggedIn}/>
    </div>
  );
}

export default Header;
