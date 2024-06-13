import axios from "axios";
import { BASE_URL } from "./BaseUrl";
import { Movie } from "../types/IMovie";

export async function getRandomFilm(): Promise<Movie> {
  return await axios.get(`${BASE_URL}movie/random`)
    .then(response => response.data);
}

export async function getTopFilms(): Promise<Movie[]> {
  return await axios.get(`${BASE_URL}movie/top10`)
    .then(response => response.data);
}

export async function searchFilms(title: string): Promise<Movie[]> {
  return await axios.get(`${BASE_URL}movie?count=5&title=${title}`)
    .then(response => response.data);
}

export async function getFilm(id: number): Promise<Movie> {
  return await axios.get(`${BASE_URL}movie/${id}`)
    .then(response => response.data);
}

export async function addFavorites(id: string): Promise<void> {
  return await axios.post(`${BASE_URL}favorites`, new URLSearchParams({id}).toString(), {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });
}

export async function deleteFavorites(id: number): Promise<void> {
  return await axios.delete(`${BASE_URL}favorites/${id}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}

export async function getGenres(): Promise<string[]> {
  return await axios.get(`${BASE_URL}movie/genres`)
    .then(response => response.data);
}

interface ParamsFilmsGenre {
  title: string;
  count: number;
}

export async function getFilmsGenre(params: ParamsFilmsGenre): Promise<Movie[]> {
  return await axios.get(`${BASE_URL}movie?count=${params.count}&genre=${params.title}`)
    .then(response => response.data);
}