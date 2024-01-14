import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <p className='footer__description'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__copyright-links'>
        <p className='footer__copyright'>© 2023</p>
        <ul className='footer__links'>
          <a
            className='footer__link'
            href='https://practicum.yandex.ru/'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
          <a
            className='footer__link'
            href='https://github.com/EvgSidDev'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
