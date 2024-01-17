import './Login.css';
import headerLogo from './../../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
      <Link to='/'><img className='login__logo' alt='Логотип' src={headerLogo} /></Link>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form'>
        <p className='login__name-input'>E-mail</p>
        <input type='email' className='login__input'></input>
        <p className='login__name-input'>Пароль</p>
        <input type='password' className='login__input'></input>
        <button type="submit" className="login__button">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
