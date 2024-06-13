import { Link } from 'react-router-dom';
import Logotype from '../../assets/images/CinemaGuide.svg';
import { path } from '../../path';
import './Logo.scss'

export const Logo = () => {
  return (
    <Link to={path.index} className='logo' >
      <img className='logo__img' alt='CinemaGuide' src={Logotype}></img>
    </Link>
  )
}
