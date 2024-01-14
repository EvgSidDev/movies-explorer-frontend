import './notFound404.css';

function NotFound404({goBack}) {
  return (
    <div className='not-found'>
      <h1 className='not-found__errorCode'>404</h1>
      <h2 className='not-found__errorDescription'>Страница не найдена</h2>
      <div className='not-found__back'>
        <a onClick={goBack} className="not-found__link">Назад</a>
      </div>
    </div>
  );
}

export default NotFound404;
