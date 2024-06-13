import { useQuery } from "@tanstack/react-query";
import { getFavorites, getMe } from "../api/User";
import { queryClient } from "../api/queryClient";
import { getFilm, getFilmsGenre, getGenres, getRandomFilm, getTopFilms, searchFilms } from "../api/Movie";

export function useMe() {
  return useQuery({
    queryFn: () => getMe(),
    queryKey: ['users', 'me'],
    retry: 0,
  },
    queryClient
  );
}

export function useFavorites() {
  return useQuery({
    queryFn: () => getFavorites(),
    queryKey: ['users', 'favorites']
  },
    queryClient
  )
}

export function useRandomFilm() {
  return useQuery({
    queryFn: () => getRandomFilm(),
    queryKey: ['randomFilm'],
    retry: 1
  },
    queryClient
  );
}

export function useSearcFilms(value: string) {
  return useQuery({
    queryFn: () => searchFilms(value),
    queryKey: ['search', value],
    retry: 1
  },
    queryClient
  );
}

export function useTopFilms() {
  return useQuery({
    queryFn: () => getTopFilms(),
    queryKey: ['top']
  }, 
    queryClient
  );
}

export function useGetFilm(filmId: number) {
  return useQuery({
    queryFn: () => getFilm(filmId),
    queryKey: ['film']
  }, 
    queryClient 
  );
}

type ParamsFilmsGenre = {
  title: string;
  count: number;
}

export function useFilmsGenres(params: ParamsFilmsGenre) {
  return useQuery({
    queryFn: () => getFilmsGenre({title: params.title, count: params.count}),
    queryKey: ['genres', 'films']
  },
    queryClient
  );
}

export function useGenres() {
  return useQuery({
    queryFn: () => getGenres(),
    queryKey: ['genres'],
    retry: 1,
  },
    queryClient
  );
}