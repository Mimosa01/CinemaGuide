import { Container } from "../Container/Container"
import { FilmsList } from "../FilmsList/FilmsList"
import './TopFilmsSection.scss';
import { Loader } from "../Loader/Loader";
import { RefetchComponent } from "../RefetchComponent/RefetchComponent";
import { useTopFilms } from "../../hooks/queryHooks";

export const TopFilmsSection = () => {
  const topFilms = useTopFilms();

  switch (topFilms.status) {
    case 'pending':
      return (
        <Loader />
      )

    case 'success':
      return (
        <section className='top'>
          <Container>
            <div className='top__container'>
              <h2 className='top__header section-header'>
                Топ 10 фильмов
              </h2>
    
              <div className='top__list-container'>
                <FilmsList data={topFilms.data} isVertical={false}/>
              </div>
            </div>
          </Container>
        </section>
      )

    case 'error':
      return <RefetchComponent handleRefetch={topFilms.refetch}/>
  }
}