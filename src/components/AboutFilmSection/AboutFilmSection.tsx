import { FC } from "react";
import { Container } from "../Container/Container"
import './AboutFilmSection.scss';
import { Movie } from "../../types/IMovie";
import { formatterNumber } from "../../utils/utils";

interface PropsAboutFilm {
  data: Movie;
}

export const AboutFilmSection: FC<PropsAboutFilm> = ({data}) => {
  return (
    <section className='about-movie'>
      <Container>
        <h2 className='section-header about-movie__header'>
          О фильме
        </h2>
        <ul className='about-list'>
          {data.languages.length > 0 && 
            <li className='about-list__item'>
              <span className='about-list__item__name'>Язык оригинала</span>
              <span className='about-list__item__value'>{data.languages[0]}</span>
            </li>
          }
          {data.budget && 
            <li className='about-list__item'>
              <span className='about-list__item__name'>Бюджет</span>
              <span className='about-list__item__value'>{`${formatterNumber(Number(data.budget))} руб`}</span>
            </li>
          }
          {data.revenue && 
            <li className='about-list__item'>
              <span className='about-list__item__name'>Выручка</span>
              <span className='about-list__item__value'>{`${formatterNumber(Number(data.revenue))} руб`}</span>
            </li>
          }
          {data.director &&
            <li className='about-list__item'>
              <span className='about-list__item__name'>Режиссер</span>
              <span className='about-list__item__value'>{data.director}</span>
            </li>
          }
          {data.production &&
            <li className='about-list__item'>
              <span className='about-list__item__name'>Продакшен</span>
              <span className='about-list__item__value'>{data.production}</span>
            </li>
          }
          {data.awardsSummary &&
            <li className='about-list__item'>
              <span className='about-list__item__name'>Награды</span>
              <span className='about-list__item__value'>{data.awardsSummary}</span>
            </li>
          }
        </ul>
      </Container>
    </section>
  )
}