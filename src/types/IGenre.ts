import History from '../assets/images/history.png';
import Horror from '../assets/images/horror.png';
import Scifi from '../assets/images/scifi.png';
import Standup from '../assets/images/stand-up.png';
import Fantasy from '../assets/images/fantasy.png';
import Drama from '../assets/images/drama.png';
import Mystery from '../assets/images/mystery.png';
import Family from '../assets/images/family.png';
import Comedy from '../assets/images/comedy.png';
import Romance from '../assets/images/romance.png';
import Music from '../assets/images/music.png';
import Crime from '../assets/images/crime.png';
import TV from '../assets/images/tv.png';
import Documentary from '../assets/images/documental.png';
import Action from '../assets/images/action.png';
import Thriller from '../assets/images/threller.png';
import Western from '../assets/images/western.png';
import Cartoon from '../assets/images/cartoon.png';
import Adventure from '../assets/images/adventure.png';
import War from '../assets/images/war.png';

export interface Genre {
  genres: string[];
}

type GenrePictureType = {
  [index: string]: string;
}

export const GENRE_PICTURE: GenrePictureType = {
  'history': History,
  'horror': Horror,
  'scifi': Scifi,
  'stand-up': Standup,
  'fantasy': Fantasy,
  'drama': Drama,
  'mystery': Mystery,
  'family': Family,
  'comedy': Comedy,
  'romance': Romance,
  'music': Music,
  'crime': Crime,
  'tv-movie': TV,
  'documentary': Documentary,
  'action': Action,
  'thriller': Thriller,
  'western': Western,
  'animation': Cartoon,
  'war': War,
  'adventure': Adventure,
}

