import './SearchForm.css';
import imageFind from './../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';
function SearchForm() {
  
  const [onlyShorts, setOnlyShorts] = useState();

  function changeMode() {
    setOnlyShorts(!onlyShorts);
  }

  return (
    <div className='search'>
      <form className='search__form'>
        <input
          className='search__text'
          type='text'
          placeholder='Фильм'
        ></input>
        <button type='submit' className='search__find'>
          <img className='search__find-image' src={imageFind} alt='Кнопка поиска фильмов'></img>
        </button>
      </form>
      <FilterCheckbox activeMode={onlyShorts} actionClick={changeMode}/>
    </div>
  );
}

export default SearchForm;
