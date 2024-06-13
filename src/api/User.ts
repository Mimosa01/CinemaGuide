import axios from "axios";
import { BASE_URL } from "./BaseUrl";
import { User, UserCreate, UserLogin } from "../types/IUser";
import { Movie } from "../types/IMovie";

export async function getMe(): Promise<User> {
  return await axios.get(`${BASE_URL}profile`, {
    withCredentials: true
  })
    .then(response => response.data);
}

export async function createUser(data: UserCreate): Promise<void> {
  return await axios.post(`${BASE_URL}user`, data, {
    withCredentials: true
  });
}

export async function login(data: UserLogin): Promise<void> {
  return await axios.post(`${BASE_URL}auth/login`, data, {
    withCredentials: true,
  });
}

export async function logout(): Promise<void> {
  return await axios.get(`${BASE_URL}auth/logout`, {
    withCredentials: true
  });
}

export async function getFavorites(): Promise<Movie[]> {
  return await axios.get(`${BASE_URL}favorites`, {
    withCredentials: true
  }).then(response => response.data)
}