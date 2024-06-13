import { FC } from "react";
import { FilmPreveiwSection } from "../../components/FilmPreveiwSection/FilmPreveiwSection"
import { Movie } from "../../types/IMovie";
import { AboutFilmSection } from "../../components/AboutFilmSection/AboutFilmSection";

interface PropsAboutFilmPage {
  film: Movie;
}

export const AboutFilmPage: FC<PropsAboutFilmPage> = ({film}) => {
  return (
    <>
      <FilmPreveiwSection data={film}/>
      <AboutFilmSection data={film}/>
    </>
  )
}