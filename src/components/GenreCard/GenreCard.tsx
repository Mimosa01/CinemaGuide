import { GENRE_PICTURE } from "../../types/IGenre";
import { FC } from "react";
import './GenreCard.scss';
import { useAppDispatch } from "../../store/store";
import { getGenre } from "../../store/features/genreSlice";
import { Link } from "react-router-dom";

interface PropsGenreCard {
  genre: string;
}

export const GenreCard: FC<PropsGenreCard> = ({genre}) => {
  const dispatch = useAppDispatch();

  const handleGetGenreFilms = () => {
    dispatch(getGenre(genre));
  }

  return (
    <Link to={`/genre/${genre}`} className='card-genre' onClick={handleGetGenreFilms}>
      <article className='card-genre__container card-shadow'>
        <img className='card-genre__img' src={GENRE_PICTURE[genre]} alt={genre}/>
        <div className='card-genre__body'>
          <span className='card-genre__title'>{genre}</span>
        </div>
      </article>
    </Link>
  )
}
