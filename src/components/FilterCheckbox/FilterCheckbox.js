import './FilterCheckbox.css';
import active from './../../images/active-checkbox.svg';
import inactive from './../../images/inactive-checkbox.svg';
function FilterCheckbox({ activeMode = false, actionClick }) {
  function changeMode(e) {
    actionClick();
  }

  return (
    <div className='checkbox'>
      <img
        onClick={changeMode}
        src={activeMode ? active : inactive}
        alt='Использование фильтра'
        className='checkbox__image'
      ></img>
      <p className='checkbox__name'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
