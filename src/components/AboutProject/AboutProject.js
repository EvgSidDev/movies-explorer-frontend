import './AboutProject.css';

function AboutProject() {
  return (
    <div className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__descriptions'>
        <div className='about-project__description'>
          <h3 className='about-project__description-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__description-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__description'>
          <h3 className='about-project__description-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__description-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__duration'>
        <div className='about-project__first-week'>
            <div className='about-project__scale'>
                <p className='about-project__scale-text'>1 неделя</p>
                <p className='about-project__name-week'>Back-end</p>
            </div>
        </div>
        <div className='about-project__other-weeks'>
            <div className='about-project__scale'>
                <p className='about-project__scale-text'>4 недели</p>
                <p className='about-project__name-week'>Front-end</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
