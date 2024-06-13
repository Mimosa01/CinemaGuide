import { FilmPreveiwSection } from "./FilmPreveiwSection";
import { Loader } from "../Loader/Loader";
import { RefetchComponent } from "../RefetchComponent/RefetchComponent";
import { useRandomFilm } from "../../hooks/queryHooks";

export const RandomFilmPreviewSection = () => {
  const randomFilm = useRandomFilm();

  const handleRestartFilm = () => {
    randomFilm.refetch()
  }

  switch (randomFilm.status) {
    case 'pending':
      return (
        <Loader />
      )

    case 'success':
      return <FilmPreveiwSection 
              data={randomFilm.data} 
              onClickRestart={handleRestartFilm}
            />;

    case 'error':
      return <RefetchComponent handleRefetch={randomFilm.refetch}/>
  }
}