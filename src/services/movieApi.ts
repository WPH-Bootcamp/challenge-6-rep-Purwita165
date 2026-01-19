import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/json",
  },
});


export function getImageUrl(
  path: string | null,
  size: string = "w342"
): string {
  if (!path) return "";
  return `${IMAGE_BASE_URL}/${size}${path}`;
}

export async function getMovieVideos(movieId: number) {
  const res = await api.get(`/movie/${movieId}/videos`);
  return res.data.results;
}

export async function getMovieDetail(movieId: number) {
  const res = await api.get(`/movie/${movieId}`);
  return res.data;
}


export async function getTrendingMovies(page = 1) {
  const res = await api.get(
    `/trending/movie/week?page=${page}`
  );
  return res.data;
}

export async function getNowPlayingMovies(page = 1) {
  const res = await api.get(
    `/movie/now_playing?page=${page}`
  );
  return res.data;
}


