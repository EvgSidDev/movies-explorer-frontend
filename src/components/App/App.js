import './app.css';
import NotFound404 from '../NotFound404/NotFound404';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Preloader from '../Preloader/Preloader';
import SavedMovies from '../SavedMovies/SavedMovies';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AppContext } from '../../contexts/AppContext';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const thisLocation = useLocation().pathname;
  const [sideBarOpen, setSideBarOpen] = useState(false);

  function closeSideBar() {
    setSideBarOpen(false);
  }

  function openSideBar() {
    setSideBarOpen(true);
  }
  
  function goBack() {
    navigate(-1);
  }
  const loggedIn = true;
  return (
    <AppContext.Provider
    >
      <CurrentUserContext.Provider
      >
        <div className='app'>
        {false && <Preloader/>}
          <Routes>
            <Route
              path='/'
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Main}
                  isMain={true}
                  openSideBar={openSideBar}
                />
              }
            />
            <Route
              path='/movies'
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Movies}
                  thisLocation={thisLocation}
                  openSideBar={openSideBar}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={SavedMovies}
                  thisLocation={thisLocation}
                  openSideBar={openSideBar}
                />
              }
            />
            <Route path='/signup' element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route
              path='/profile'
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Profile}
                  isMain={false}
                  footerIsHidden={true}
                  openSideBar={openSideBar}
                />
              }
            />
            <Route path='*' element={<NotFound404 goBack={goBack} />} />
          </Routes>
          <SideBar location={thisLocation} closeAction={closeSideBar} isOpen={sideBarOpen}/>
        </div>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
