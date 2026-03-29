import axios from "axios";
import type { Movie } from "../types/movie";


interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

const BASE_URL = "https://api.themoviedb.org/3";

const token = import.meta.env.VITE_TMDB_TOKEN;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesResponse> => {
  const response = await instance.get<MoviesResponse>("/search/movie", {
    params: {
      query,
      page,
    },
  });

  return response.data;
};




