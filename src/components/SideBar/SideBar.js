import './SideBar.css';
import closeIcon from './../../images/close-icon.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import lkLogo from './../../images/lk-logo.svg';

function SideBar({ location, closeAction, isOpen }) {
  
    return (
    <div className={`side-bar ${isOpen ? 'side-bar__visible' : ''}`}>
      <img onClick={closeAction} src={closeIcon} className='side-bar__close' alt='Закрыть'></img>
      <Navigation location={location} closeAction={closeAction}/>
      <Link onClick={closeAction} className='side-bar__lk-link' to='/profile'>
        Аккаунт{' '}
        <img
          className='side-bar__lk-logo'
          src={lkLogo}
          alt='Логотип личного кабинета'
        ></img>
      </Link>
    </div>
  );
}

export default SideBar;
