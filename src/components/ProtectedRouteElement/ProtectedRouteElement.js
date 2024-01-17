import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { AppContext } from '../../contexts/AppContext';
import './ProtectedRouteElement.css';

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  const { loggedIn, sideBarIsOpen } = useContext(AppContext);

  return loggedIn ? (
    <div className={`page ${sideBarIsOpen ? 'page_dark' : ''}`}>
      <Header />
      <Component {...props} />
      {!props.footerIsHidden && <Footer />}
    </div>
  ) : (
    <Navigate to='/signin' replace />
  );
};

export default ProtectedRouteElement;
