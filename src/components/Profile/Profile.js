import './Profile.css';

function Profile({ name = 'noName' }) {
  return (
    <div className='profile'>
      <h1 className='profile__title'>{`Привет, ${name}!`}</h1>
      <form className='profile__form'>
        <div className='profile__data-grid'>
          <p className='profile__input-title'>Имя</p>
          <input type='text' className='profile__input'></input>
          <p className='profile__input-title'>Почта</p>
          <input type='email' className='profile__input'></input>
        </div>
        <button type='submit' className='profile__button-submit'>
          Редактировать
        </button>
      </form>
      <button type='button' className='profile__button-exit'>
        Выйти из аккаунта
      </button>
    </div>
  );
}

export default Profile;
