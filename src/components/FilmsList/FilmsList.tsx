import { FC } from "react";
import { FilmCard } from "../FilmCard/FilmCard";
import { useLocation } from "react-router-dom";
import { path } from "../../path";
import './FilmsList.scss';
import classNames from "classnames";
import { Movie } from "../../types/IMovie";

interface PropsFilmsList {
  data: Movie[];
  isVertical?: boolean;
}

export const FilmsList: FC<PropsFilmsList> = ({data, isVertical}) => {
  const isFilmLibrary = useLocation().pathname.includes(path.genre);
  const listClass = classNames({
    'film-list': true,
    'film-list__mb': isFilmLibrary,
    'film-list--vertical': isVertical
  })

  return (
    <ul className={listClass}>
      {data.map((item, index) => (
        <li className='film-list__item' key={item.id}>
          <FilmCard data={item} index={index}/>
        </li>
      ))}
    </ul>
  )
}