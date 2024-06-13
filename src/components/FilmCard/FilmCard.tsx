import { Link, useLocation } from "react-router-dom"
import './FilmCard.scss';
import { path } from "../../path";
import { FC } from "react";
import { Movie } from "../../types/IMovie";
import { Button } from "../Button/Button";
import { useDeleteFavorites } from "../../hooks/mutationHooks";
import { Loader } from "../Loader/Loader";

interface PropsFilmCard {
  data: Movie;
  index: number;
}

export const FilmCard: FC<PropsFilmCard> = ({data, index}) => {
  const isAccount = useLocation().pathname.includes('/account') ? true : false;
  const isTop = useLocation().pathname === path.index ? true : false;
  
  const deleteFavoritesMutate = useDeleteFavorites();

  const handleDeleteFavorites = (id: number) => {
    deleteFavoritesMutate.mutate(id);
  }

  return (
    <div className="card-film">
      <Link to={`/about/${data.id}`} className='card-film__link'>
        {deleteFavoritesMutate.isPending && <Loader />}
        <article className='card-film__body card-shadow'>
          {isTop && <span className='card-film__raiting'>{index + 1}</span>}
          <img src={data.posterUrl} alt={data.title} className='card-film__img'/>
        </article>
      </Link>

      {
      isAccount && 
        <Button 
          view={{none: true}} 
          tabindex={0} 
          className='card-film__delete' 
          onClick={() => {handleDeleteFavorites(data.id)}}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.9997 5.5865L11.9495 0.636719L13.3637 2.05093L8.4139 7.0007L13.3637 11.9504L11.9495 13.3646L6.9997 8.4149L2.04996 13.3646L0.635742 11.9504L5.5855 7.0007L0.635742 2.05093L2.04996 0.636719L6.9997 5.5865Z" fill="black"/>
          </svg>  
        </Button>
      }
    </div>
  )
}