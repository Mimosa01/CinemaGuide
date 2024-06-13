import classNames from "classnames";

export function normalizeTime(time: number): string {
  const hour = Math.floor(time / 60);
  const minute = time % 60;

  return `${hour} ч ${minute} мин`;
}

export function getRaitingClasses(raiting: number): string {
  return classNames({
    'found__row-info__raiting': true,
    'gold': raiting >= 8,
    'green': raiting >= 7 && raiting < 8,
    'grey': raiting >= 5 && raiting < 7,
    'red': raiting < 5 
  });
}

export function formatterNumber(number: number) {
  return new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 0 }).format(number);
}