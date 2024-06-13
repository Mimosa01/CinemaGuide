import { AboutFilmPage } from "./AboutFilmPage";
import { Loader } from "../../components/Loader/Loader";
import { RefetchComponent } from "../../components/RefetchComponent/RefetchComponent";
import { useLocation } from "react-router-dom";
import { useGetFilm } from "../../hooks/queryHooks";

export const FetchAboutFilmPage = () => {
  const filmId = Number(useLocation().pathname.split('/')[useLocation().pathname.split('/').length - 1]);
  
  const getFilmQuery = useGetFilm(filmId);
  
  switch (getFilmQuery.status) {
    case 'pending':
      return <Loader />

    case 'success':
      return (
        <AboutFilmPage film={getFilmQuery.data}/>
      )

    case 'error':
      return <RefetchComponent handleRefetch={getFilmQuery.refetch}/>
  }

}