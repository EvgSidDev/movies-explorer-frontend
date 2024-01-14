import active from './../../images/active-checkbox.svg';
import inactive from './../../images/inactive-checkbox.svg';
function FilterCheckbox({ activeMode = false, actionClick }) {
  function changeMode(e) {
    actionClick();
  }

  return (
    <img
      onClick={changeMode}
      src={activeMode ? active : inactive}
      alt='Использование фильтра'
    ></img>
  );
}

export default FilterCheckbox;
