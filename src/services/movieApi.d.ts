import type { Movie } from '../types/movie';

export function getTrendingMovie(): Promise<Movie>;
export function getTrendingMovies(): Promise<{
  results: Movie[];
}>;

export function getImageUrl(
  path: string,
  size?: string
): string;
