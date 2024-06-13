import { Link } from "react-router-dom"
import { SearchInput } from "../SearchComponent/SearchInput";
import './DesktopNav.scss';
import { path } from "../../path";
import { Account } from "../Account/Account";

// Пути нужно будет наверное поменять
export const DesktopNav = () => {

  return (
    <nav className="nav">
      <Link to={path.index} className='nav__link'>Главная</Link>
      <Link to={path.genre} className='nav__link'>Жанры</Link>
      <SearchInput />
      <Account />
    </nav>
  )
}