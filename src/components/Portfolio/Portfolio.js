import './Portfolio.css';
import arrow from '../../images/link-arrow.svg';

function Portfolio() {
  return (
    <div id='portfolio' className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__element'>
          <a className='portfolio__link' href='#'>
            Статичный сайт
          </a>
          <a className='portfolio__link' href='#'>
            ↗
          </a>
        </li>
        <li className='portfolio__element'>
          <a className='portfolio__link' href='#'>
            Адаптивный сайт
          </a>
          <a className='portfolio__link' href='#'>
            ↗
          </a>
        </li>
        <li className='portfolio__element'>
          <a className='portfolio__link' href='#'>
            Одностраничное приложение
          </a>
          <a className='portfolio__link' href='#'>
            ↗
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
