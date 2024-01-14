import LoadOtherButton from '../LoadOtherButton/LoadOtherButton';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <div className='movies'>
    <SearchForm />  
      <MoviesCardList makeDelete={false}/>
      <LoadOtherButton />
    </div>
  );
}

export default Movies;
