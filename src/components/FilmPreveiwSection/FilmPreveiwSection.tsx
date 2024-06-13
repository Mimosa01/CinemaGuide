import { Button } from '../Button/Button';
import { Container } from "../Container/Container"
import { Link, useLocation } from 'react-router-dom';
import { path } from '../../path';
import './FilmPreveiwSection.scss';
import { FC } from 'react';
import { normalizeTime } from '../../utils/utils';
import classNames from 'classnames';
import { Movie } from '../../types/IMovie';
import { useAppDispatch } from '../../store/store';
import { openPlayer } from '../../store/features/playerSlice';
import { useAddFavorites, useDeleteFavorites } from '../../hooks/mutationHooks';
import { useFavorites } from '../../hooks/queryHooks';

interface PropsFilmPreview {
  data: Movie;
  onClickRestart?: () => void;
}

export const FilmPreveiwSection: FC<PropsFilmPreview> = (props) => {
  const dispatch = useAppDispatch();
  const isRandomFilm = useLocation().pathname === path.index ? true : false;

  const raitingClass = classNames({
    'movie__row-info__raiting': true,
    'gold': props.data.tmdbRating >= 8,
    'green': props.data.tmdbRating >= 7 && props.data.tmdbRating < 8,
    'grey': props.data.tmdbRating >= 5 && props.data.tmdbRating < 7,
    'red': props.data.tmdbRating < 5 
  })

  const addFavoritesMutate = useAddFavorites();
  const deleteFavoritesMutate = useDeleteFavorites();
  const userFavorites = useFavorites();

  const handleClickFavorites = (movie: Movie) => {
    if (userFavorites.status === 'success') {
      if (userFavorites.data.some(film => film.id === movie.id)) {
        deleteFavoritesMutate.mutate(movie.id);
      } else {
        addFavoritesMutate.mutate(String(movie.id));
      }
    }
  }

  const handleClickTrailer = () => {
    dispatch(openPlayer(props.data.trailerYouTubeId));
  }

  return (
    <section className='hero'>
      <Container>
        <div className='hero__container'>
          <article className='movie'>
            {props.data.backdropUrl && <img src={props.data.backdropUrl} alt={props.data.title} className='movie__img'/>}

            <div className='movie__body'>
              <div className='movie__row-info'>
                <span className={raitingClass}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00105 12.1733L3.29875 14.8054L4.34897 9.51991L0.392578 5.86118L5.74394 5.22669L8.00105 0.333313L10.2581 5.22669L15.6095 5.86118L11.6531 9.51991L12.7033 14.8054L8.00105 12.1733Z" fill="white"/>
                  </svg>
                    {props.data.tmdbRating.toFixed(1)}
                </span>
                <span className='movie__row-info__text'>{props.data.relaseYear}</span>
                <span className='movie__row-info__text'>{props.data.genres[0]}</span>
                <span className='movie__row-info__text'>{normalizeTime(props.data.runtime)}</span>
              </div>

              <h2 className='movie__header'>
                {props.data.title}
              </h2>
              <p className='movie__desc'>
                {props.data.plot}
              </p>

              <nav className='movie__nav'>
                <Button view={{color: true}} onClick={handleClickTrailer}>Трейлер</Button>
                {
                  isRandomFilm && <Link 
                                    to={`about/${props.data.id}`} 
                                    className='movie__btn'
                                  >
                                    О фильме
                                  </Link>
                }
                <Button view={{icon: true}} onClick={() => handleClickFavorites(props.data)}>
                  {userFavorites.data?.some(film => film.id === props.data.id) ?
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0Z" fill="#B4A9FF"/>
                    </svg>
                    :
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" fill="white"/>
                  </svg> }
                </Button>
                {
                  isRandomFilm && 
                  <Button view={{icon: true}} onClick={props.onClickRestart}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4C14.7486 4 17.1749 5.38626 18.6156 7.5H16V9.5H22V3.5H20V5.99936C18.1762 3.57166 15.2724 2 12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20C9.25144 20 6.82508 18.6137 5.38443 16.5H8V14.5H2V20.5H4V18.0006C5.82381 20.4283 8.72764 22 12 22C17.5228 22 22 17.5228 22 12H20Z" fill="white"/>
                    </svg>
                  </Button>
                }
              </nav>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}