import { Container } from "../../components/Container/Container"
import { GenresList } from "../../components/GenresList/GenresList"
import './GenrePage.scss';
import { Loader } from "../../components/Loader/Loader";
import { RefetchComponent } from "../../components/RefetchComponent/RefetchComponent";
import { useGenres } from "../../hooks/queryHooks";

export const GenrePage = () => {
  const listGenresQuery = useGenres();

  switch (listGenresQuery.status) {
    case 'pending':
      return <Loader />

    case 'success':
      return (
        <section className='genre'>
          <Container>
            <h2 className='section-header genre__header'>
              Жанры фильмов
            </h2>
            <GenresList genres={listGenresQuery.data}/>
          </Container>
        </section>
      )

    case 'error':
      return <RefetchComponent handleRefetch={listGenresQuery.refetch}/>
  }
}