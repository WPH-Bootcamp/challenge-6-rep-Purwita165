import { useQuery } from "@tanstack/react-query";
import { getTrendingMovie } from "../services/movieApi";

export const useTrendingMovies = () => {
  return useQuery({
    queryKey: ["movies", "trending"],
    queryFn: getTrendingMovie,
  });
};
