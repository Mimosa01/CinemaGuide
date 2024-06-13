import { Link } from "react-router-dom"
import { Container } from "../../components/Container/Container"
import { path } from "../../path"
import { FilmsList } from "../../components/FilmsList/FilmsList"
import { Button } from "../../components/Button/Button"
import './GenreFilmPage.scss';
import { FC, useEffect, useState } from "react"
import { Loader } from "../../components/Loader/Loader"
import { RefetchComponent } from "../../components/RefetchComponent/RefetchComponent"
import { useFilmsGenres } from "../../hooks/queryHooks"

interface PropsGenreFilmPage {
  title: string;
}

export const GenreFilmPage: FC<PropsGenreFilmPage> = ({title}) => {
  const [currentCount, setCurrentCount] = useState<number>(15);

  const genreFilmsQuery = useFilmsGenres({title: title, count: currentCount})

  const handleFilmsEtc = () => {
    setCurrentCount((prev) => prev += 10);
  }

  useEffect(() => {
    genreFilmsQuery.refetch();
  })

  switch (genreFilmsQuery.status) {
    case 'pending':
      return <Loader />

    case 'success':
      return (
        <section className='genre-films'>
          <Container>
            <Link to={path.genre} className='genre-films__link'>
              <h2 className='section-header genre-films__header'>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.8284 7.0007L7.7782 11.9504L6.364 13.3646L0 7.0007L6.364 0.636719L7.7782 2.05093L2.8284 7.0007Z" fill="black"/>
                </svg>
                Фантастика
              </h2>
            </Link>
            <FilmsList data={genreFilmsQuery.data} isVertical={true}/>
            <div className='genre-films__btn-container'>
              {currentCount === genreFilmsQuery.data.length ?
                <Button view={{color: true}} className='genre-films__btn' onClick={handleFilmsEtc}>
                  Показать еще
                </Button>
                :
                null
              }
            </div>
          </Container>
        </section>
      )

    case 'error':
      return <RefetchComponent handleRefetch={genreFilmsQuery.refetch}/>
  }
}