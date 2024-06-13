import { FC } from "react";
import { GenreCard } from "../GenreCard/GenreCard";
import './GenresList.scss';
import { Genre } from "../../types/IGenre";

export const GenresList: FC<Genre> = ({genres}) => {

  return (
    <ul className='genre-list'>
      {genres.map((item, index) => (
        <li className='genre-list__item' key={index}>
          <GenreCard genre={item} />
        </li>
      ))}
    </ul>
  )
}