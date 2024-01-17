import './SideBar.css';
import closeIcon from './../../images/close-icon.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import lkLogo from './../../images/lk-logo.svg';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

function SideBar() {
  const {closeSideBar, sideBarIsOpen } = useContext(AppContext);

    return (
    <div className={`side-bar ${sideBarIsOpen ? 'side-bar__visible' : ''}`}>
      <img onClick={closeSideBar} src={closeIcon} className='side-bar__close' alt='Закрыть'></img>
      <Navigation/>
      <Link onClick={closeSideBar} className='side-bar__lk-link' to='/profile'>
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
