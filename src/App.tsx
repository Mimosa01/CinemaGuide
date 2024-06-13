import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { path } from './path'
import { GenrePage } from './pages/GenrePage/GenrePage'
import { GenreFilmPage } from './pages/GenreFilmPage/GenreFilmPage'
import { useAppSelector } from './store/store'
import { ModalWindow } from './components/Modal/ModalWindow'
import { FetchAboutFilmPage } from './pages/AboutFilmPage/FetchAboutFilmPage'
import { Player } from './components/Player/Player'
import { FetchAccountPage } from './pages/AccountPage/FetchAccountPage'

export const App = () => {
  const modal = useAppSelector(state => state.modal);
  const genre = useAppSelector(state => state.genre);
  const trailer = useAppSelector(state => state.player);
  
  return (

    <BrowserRouter>
    {modal.open && <ModalWindow appointment={modal.appointment}/>}
    {trailer.open && <Player id={trailer.id}/>}
    <Header />
      <main>
        <Routes>
          <Route path={path.index} element={<MainPage />} />
          <Route path={path.genre} element={<GenrePage />} />
          <Route path={path.genreFilm} element={<GenreFilmPage title={genre.genre} />}/>
          <Route path={path.aboutFilm} element={<FetchAboutFilmPage />}/>
          <Route path={path.account} element={<FetchAccountPage />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}