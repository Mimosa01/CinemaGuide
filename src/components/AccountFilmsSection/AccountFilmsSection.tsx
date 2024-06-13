import { FilmsList } from "../FilmsList/FilmsList"
import { Loader } from "../Loader/Loader"
import { RefetchComponent } from "../RefetchComponent/RefetchComponent"
import { useFavorites } from "../../hooks/queryHooks"

export const AccountFilmsSection = () => {
  const favoritesFilm = useFavorites();

  switch (favoritesFilm.status) {
    case 'pending':
      return <Loader />

    case 'success': 
      return (
        <div className='top__list-container'>
          {favoritesFilm.data.length > 0 ?
            <FilmsList data={favoritesFilm.data} /> :
            <p className="oops">Упс... Кажется вы не добавили еще не одного фильма</p>
          }
        </div> 
      )

    case 'error':
      return <RefetchComponent handleRefetch={favoritesFilm.refetch}/>
  }
}