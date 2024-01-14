import './Register.css';
import headerLogo from './../../images/header-logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [emailError, setEmailError] = useState('Почта не может быть пустой');
  const [passwordError, setPasswordError] = useState(
    'Пароль не может быть пустым'
  );
  const [nameError, setNameError] = useState('Имя не может быть пустым');

  function blurHandler(e) {
    // switch (e.target.name) {
    //   case 'name':
    //     setNameDirty(true);
    //     break;
    //   case 'email':
    //     setEmailDirty(true);
    //     break;
    //   case 'password':
    //     setPasswordDirty(true);
    //     break;
    //   default:
    //     break;
    // }
  }

  return (
    <div className='register'>
      <Link to='/'><img className='register__logo' alt='Логотип' src={headerLogo} /></Link>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form'>
        <p className='register__name-input'>Имя</p>
        <input
          onBlur={blurHandler}
          name='name'
          type='text'
          required
          className='register__input'
        ></input>
        <p className='register__name-input'>E-mail</p>
        <input
          onBlur={blurHandler}
          name='email'
          type='email'
          required
          className='register__input'
        ></input>

        <p className='register__name-input'>Пароль</p>
        <input
          onBlur={blurHandler}
          name='password'
          type='password'
          required
          className='register__input'
        ></input>
        <button type='submit' className='register__button'>
          Зарегистрироваться
        </button>
      </form>
      <p className='register__login-label'>
        Уже зарегистрированы?&nbsp;
        <Link to='/signin' className='register__login-link'>
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
