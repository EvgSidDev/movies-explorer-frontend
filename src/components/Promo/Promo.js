import './promo.css';
import headerLogo from '../../images/landing-logo.svg';

function Promo() {
  return (
    <div className='promo'>
      <div className='promo__info'>
        <div className='promo__title-description'>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className='promo__description'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img
          className='promo__logo'
          src={headerLogo}
          alt='Логотип начальной страницы'
        ></img>
      </div>
      <a className='promo__button' href='#portfolio'>Узнать&nbsp;больше</a>
    </div>
  );
}

export default Promo;
