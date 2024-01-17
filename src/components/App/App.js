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
  const loggedIn = true;
  const generalRoute = '/';
  const moviesRoute = '/movies';
  const savedMoviesRoute = '/saved-movies';
  const location = useLocation().pathname;
  const [sideBarIsOpen, setsideBarIsOpen] = useState(false);
  const routes = { generalRoute, moviesRoute, savedMoviesRoute };

  function closeSideBar() {
    setsideBarIsOpen(false);
  }

  function openSideBar() {
    setsideBarIsOpen(true);
  }

  function goBack() {
    navigate(-1);
  }
  return (
    <AppContext.Provider value={{ loggedIn, location, routes, openSideBar, closeSideBar, sideBarIsOpen }}>
      <CurrentUserContext.Provider>
        <div className={`app`}>
          {false && <Preloader />}
          <Routes>
            <Route
              path={generalRoute}
              element={
                <ProtectedRouteElement
                  element={Main}
                />
              }
            />
            <Route
              path={moviesRoute}
              element={
                <ProtectedRouteElement
                  element={Movies}
                />
              }
            />
            <Route
              path={savedMoviesRoute}
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                />
              }
            />
            <Route path='/signup' element={<Register />} />
            <Route path='/signin' element={<Login />} />
            <Route
              path='/profile'
              element={
                <ProtectedRouteElement
                  element={Profile}
                  footerIsHidden={true}
                />
              }
            />
            <Route path='*' element={<NotFound404 goBack={goBack} />} />
          </Routes>
          {sideBarIsOpen && <SideBar />}
        </div>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
