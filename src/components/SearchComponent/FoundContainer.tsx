import { FC } from "react";
import { getRaitingClasses, normalizeTime } from "../../utils/utils";
import { Link } from "react-router-dom";
import './SearchComponent.scss';
import { Movie } from "../../types/IMovie";

interface PropsFoundContainer {
  data: Movie[];
}

export const FoundContainer: FC<PropsFoundContainer> = ({data}) => {
  return (
    <ul className="found">
      {data.length > 0 ? data.map(item => (
        <li className="found__item" key={item.id}>
          <Link to={`/about/${item.id}`} className="found__container">
            <img src={item.posterUrl} alt={item.title} className="found__img"/>

            <div className="found__wrapper">
              <div className="found__row-info">
                <span className={getRaitingClasses(item.tmdbRating)}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00105 12.1733L3.29875 14.8054L4.34897 9.51991L0.392578 5.86118L5.74394 5.22669L8.00105 0.333313L10.2581 5.22669L15.6095 5.86118L11.6531 9.51991L12.7033 14.8054L8.00105 12.1733Z" fill="white"/>
                  </svg>
                    {item.tmdbRating.toFixed(1)}
                </span>
                <span className="found__row-info__text">{item.relaseYear}</span>
                <span className="found__row-info__text">{item.genres[0]}</span>
                <span className="found__row-info__text">{normalizeTime(item.runtime)}</span>
              </div>
              <span className="found__name">{item.title}</span>
            </div>
          </Link>
        </li>
      )) :
        <span className="found__no-search">Ничего не найдено</span>
      }
    </ul>
  )
}