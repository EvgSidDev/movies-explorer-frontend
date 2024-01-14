import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  
  return props.loggedIn ? (
    <div>
      <Header isMain={props.isMain} location={props.thisLocation}/>
      <Component {...props} />
      {!props.footerIsHidden && <Footer />}
    </div>
  ) : (
    <Navigate to='/signin' replace />
  );
};

export default ProtectedRouteElement;
