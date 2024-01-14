import './AboutMe.css';
import photo from './../../images/photo.jpg'

function AboutMe() {
  return (
    <div className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__texts'>
          <div>
            <h3 className='about-me__name'>Евгений</h3>
            <p className='about-me__speciality'>Фронтенд-разработчик, 26 лет</p>
            <p className='about-me__text'>
              Решил сменить область деятельности и уйти из разработки и проектов
              1С в web&#8209;разработку. Планирую освоить back&#8209;end.
            </p>
          </div>
          <a
            className='about-me__link'
            href='https://github.com/EvgSidDev'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </div>
        <img className='about-me__photo' src={photo} alt='Фото профиля'></img>
      </div>
    </div>
  );
}

export default AboutMe;
