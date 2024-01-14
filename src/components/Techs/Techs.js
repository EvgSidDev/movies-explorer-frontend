import './Techs.css';

function Techs() {
  return (
    <div className='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='techs__info'>
        <h3 className='techs__title-info'>7 технологий</h3>
        <h3 className='techs__description-info'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </h3>
        <ul className='techs__tools'>
            <li className='techs__tool'>HTML</li>
            <li className='techs__tool'>CSS</li>
            <li className='techs__tool'>JS</li>
            <li className='techs__tool'>React</li>
            <li className='techs__tool'>Git</li>
            <li className='techs__tool'>Express.js</li>
            <li className='techs__tool'>mongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default Techs;
